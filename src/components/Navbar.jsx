import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const links = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
    </>


    const { singOut, user } = useContext(AuthContext);


    const handleSignOut = () => {
        singOut();
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">SuccessTrack</Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-5">

                    {
                        user ? (
                            <div className="flex flex-row gap-5">
                                <Link to={'/profile'}>
                                    <img
                                        className="rounded-full w-10 object-cover"
                                        alt={user?.displayName}
                                        src={user?.photoURL}
                                        title={user?.displayName}
                                    />
                                </Link>
                                <a onClick={handleSignOut} className="btn">Log Out</a>
                            </div>)
                            : <Link to='/login' className="btn">Log In</Link>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;