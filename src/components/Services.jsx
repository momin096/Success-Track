import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const { id, category, counselor, image, pricing, service_name, rating } = service;


    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm p-5">
                <figure>
                    <img
                        src={image}
                        alt={service_name} />
                </figure>
                <div className="card-body pl-2">
                    <p className="text-xl font-semibold">{counselor}</p>
                    <h2 className="text-lg">{service_name}</h2>
                    <p className="badge text-black bg-[#79D7BE]">{category}</p>

                    <p className="font-semibold">Price: ${pricing}</p>
                    <div className="">
                        <Link to={`/services/${id}`} className="badge btn badge-outline">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;