import { useLoaderData } from "react-router-dom";
import Services from "../components/Services";
import Slider from "../components/Slider";
const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Slider />
            <div className="grid grid-cols-3 gap-5">
                {
                    services.map((service,idx) =><Services key={idx} service={service} /> )
                }
            </div>
        </div>
    );
};

export default Home;