import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from '../components/Loading'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayouts = () => {
    // const {loading} = useContext(AuthContext);
    // if (loading){
    //     return <Loading />
    // }
    return (
        <div className="">
            <header className="container mx-auto">
                <Navbar />
            </header>
            <main className="container mx-auto">
                <Outlet />
            </main>
            <footer>
                <Footer  />
            </footer>
        </div>
    );
};

export default MainLayouts;