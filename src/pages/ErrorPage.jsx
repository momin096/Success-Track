import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col space-y-5'>
            <img className='max-w-3xs w-full' src="/error.png" alt="" />
            <h2 className="text-5xl font-bold">404 Error</h2>
            <p>Page Not Found</p>
            <Link to='/' className="btn">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;