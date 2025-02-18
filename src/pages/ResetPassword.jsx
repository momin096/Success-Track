import { useContext,  useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ResetPassword = () => {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const {forgetPassword} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        setSuccess(null);
        setError(null);
        forgetPassword(email)
        .then((result) =>{
            setSuccess('Check you mail')
        })
        .catch(error =>{
            setError(error.code);
        })
        
    }
    return (
        <div className="min-h-[calc(100vh-142px)] flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-5">
                <h2 className="text-5xl font-semibold mb-10">Reset Your Password</h2>
                {
                    success && <p className="text-green-500">{success}</p>
                }
                {
                    error && <p className="text-red-500">{error}</p>
                }
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input name="email" type="text" className="grow" placeholder="Type Your Email" /> 
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default ResetPassword;