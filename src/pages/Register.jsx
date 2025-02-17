import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUserWithEmail, createNewUserWithGoogle, setUser,updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        createNewUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName: name, photoURL: photo})
                .then(result =>{
                    navigate('/')
                })
            })
            .catch(error => console.log(error.code))
    }

    const handleGoogleSignIn = () => {
        createNewUserWithGoogle()
        .then(result =>{
            navigate('/')
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
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
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>

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