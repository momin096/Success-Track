import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { signInWIthEmail, setUser, createNewUserWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [pass, setPass] = useState(false);
    const [error, setError] = useState(null);


    const handleShowPassword = () => {
        setPass(!pass);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        signInWIthEmail(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error =>{
                setError(error.code);
            })
    }

    const signInWithGoogle = () => {
        createNewUserWithGoogle()
            .then(result => {
                navigate(location?.state ? location.state : '/')
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-142px)] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-8 card-body">
                        <form onSubmit={handleSubmit} className="">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />

                                <div className="relative">
                                    <label className="fieldset-label">Password</label>
                                    <input name="password" type={pass ? 'text' : 'password'} className="input" placeholder="Password" />

                                    <span className="absolute right-2 bottom-2.5" onClick={handleShowPassword}>
                                        {
                                            pass ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />
                                        }
                                    </span>
                                </div>

                                <div><Link to={'/login/reset-password'} className="link link-hover">Forgot password?</Link></div>
                                <button className="btn btn-neutral mt-4">Login</button>

                                <p className="">Do not have an account? <Link className="text-red-500" to='/register' >Register</Link></p>

                                {
                                    error && <p className="text-red-500">{error}</p>
                                }

                            </fieldset>
                        </form>

                        <button
                            onClick={signInWithGoogle} className="flex btn items-center justify-center gap-2 ">
                            <FcGoogle className="text-xl" />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;