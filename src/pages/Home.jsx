import { useLoaderData } from "react-router-dom";
import Services from "../components/Services";
import Slider from "../components/Slider";
import SuccessProcess from "../components/SuccessProcess";
const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Slider />
            <div className="py-10">
                <h2 className="text-5xl text-center font-semibold my-10">Our Services</h2>
                <div className="grid grid-cols-3 gap-5">

                    {
                        services.map((service, idx) => <Services key={idx} service={service} />)
                    }
                </div>
            </div>
            <SuccessProcess />
        </div>
    );
};

export default Home;