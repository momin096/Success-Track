import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const {id, category, counselor, description, duration, image, pricing, raitng, service_name } = service;


    return (
        <div className="border">
            <div className="card bg-base-100 shadow-sm p-2">
                <figure>
                    <img
                        src={image}
                        alt={service_name} />
                </figure>
                <div className="card-body pl-2">
                <p className="text-xl font-semibold">{counselor}</p>
                    <h2 className="text-lg">
                        {service_name}
                        <div className="badge text-black bg-[#79D7BE] ml-2">{category}</div>
                    </h2>
                    <p className="font-semibold">Price: ${pricing}</p>
                    
                    <div className="card-actions ">
                        <Link to={`/services/${id}`}  className="badge btn badge-outline">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;