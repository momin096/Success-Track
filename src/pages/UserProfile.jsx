import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    
    return (
        <div className="min-h-[calc(100vh-165px)] flex flex-col  items-center p-10 gap-5">
            <h2 className="text-2xl md:text-4xl">Name: {user.displayName}</h2>
            <p className="text-xl md:text-3xl">Email: {user.email} </p>
            <p className="text-xl  md:text-2xl text-center ">PhotoURL: <span> {user.photoURL}</span></p>
            <Link to={'/profile/edit-profile'} className="btn">Edit Profile</Link>
        </div>
    );
};

export default UserProfile;