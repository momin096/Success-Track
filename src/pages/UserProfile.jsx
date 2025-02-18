import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    
    return (
        <div className="min-h-[calc(100vh-142px)] flex flex-col  items-center pt-10 gap-5">
            <h2 className="text-4xl">Name: {user.displayName}</h2>
            <p className="text-3xl">Email: {user.email} </p>
            <p className="text-2xl text-center">PhotoURL: {user.photoURL}</p>
            <Link to={'/profile/edit-profile'} className="btn">Edit Profile</Link>
        </div>
    );
};

export default UserProfile;