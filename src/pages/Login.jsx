import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
    const { signInWIthEmail, setUser, createNewUserWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
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
    }

    const signInWithGoogle = () => {
        createNewUserWithGoogle()
        .then(result =>{
            navigate(location?.state ? location.state : '/')
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />


                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>

                                <p className="py-2">Do not have an account? <Link className="text-red-500" to='/register' >Register</Link></p>

                                <button
                                    onClick={signInWithGoogle} className="flex btn items-center justify-center gap-2">
                                    <FcGoogle className="text-xl" />
                                    Continue with Google
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;