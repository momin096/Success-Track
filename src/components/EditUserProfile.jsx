import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const EditUserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();


        const form = new FormData(e.target);
        const name = form.get('name')?.trim();
        const email = form.get('email')?.trim();
        const photo = form.get('photo')?.trim();

        const updatedData = {};
        if (name) updatedData.displayName = name;
        if (email) updatedData.email = email;
        if (photo) updatedData.photoURL = photo;

        if (Object.keys(updatedData).length > 0) {
            updateUserProfile(updatedData)
                .then(() => {
                    navigate('/profile');
                })
                .catch(error => console.log(error.code)
                )
        }
    }

    return (
        <div className="min-h-[calc(100vh-142px)] flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-10 font-medium">Update Your Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input name="name" type="text" className="grow input-lg" placeholder={user.displayName} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input name="email" type="text" className="grow " placeholder={user.email} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    PhotoURL
                    <input name="photo" type="text" className="grow" placeholder={user.photoURL} />
                </label>

                <button className="btn w-full">Update</button>
            </form>
        </div>
    );
};

export default EditUserProfile;