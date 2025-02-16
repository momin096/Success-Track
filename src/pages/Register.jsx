import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-1/2">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" placeholder="Name" />

                                    <label className="fieldset-label">Photo URL</label>
                                    <input type="text" className="input" placeholder="Photo URL" />

                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>

                                    <p className="py-2">Already have an account? <Link className="text-red-500" to='/login' >Login</Link></p>

                                    <button className="flex  btn items-center justify-center gap-2"><FcGoogle className="text-xl" />Continue with Google</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;