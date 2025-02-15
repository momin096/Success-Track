import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div className="container mx-auto">

            <Outlet />
        </div>
    );
};

export default MainLayouts;