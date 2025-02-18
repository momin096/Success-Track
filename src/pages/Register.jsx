import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createNewUserWithEmail, createNewUserWithGoogle, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [pass, setPass] = useState(false);
    const navigate = useNavigate();

    const handleShowPassword = () =>{
        setPass(!pass);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        setError('')

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError('Your password Must have One UPPERCASE,one lowercase,at least 6 character');
            return;
        }

        createNewUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
            })
            .catch(error => setError(error.message))
    }

    const handleGoogleSignIn = () => {
        createNewUserWithGoogle()
            .then(() => {
                navigate('/')
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-142px)] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" />

                                <label className="fieldset-label">Photo URL</label>
                                <input name="photo" type="text" className="input" placeholder="Photo URL" />

                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <div className="relative">
                                    <label className="fieldset-label">Password</label>
                                    <input name="password" type={pass ? 'text' : 'password' } className="input" placeholder="Password" />

                                    <span className="absolute right-2 bottom-2.5" onClick={handleShowPassword}>
                                        {
                                            pass ?  <FaEye className="text-xl" /> :<FaEyeSlash className="text-xl" />
                                        }
                                    </span>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                                {
                                    error && <p className="text-red-500">{error}</p>
                                }
                                <p className="py-2">Already have an account? <Link className="text-red-500" to='/login' >Login</Link></p>

                                <button onClick={handleGoogleSignIn} className="flex  btn items-center justify-center gap-2"><FcGoogle className="text-xl" />Continue with Google</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;