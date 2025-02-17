import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [comments, setComments] = useState([]);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const serviceDetails = data.find((service) => parseInt(id) === service.id);
        setDetails(serviceDetails);
    }, [data, id]);
    const { category, counselor, description, duration, image, pricing, rating, service_name } = details;



    const handleFeedback = (e) => {
        e.preventDefault();
        if (feedback.trim() === '') {
            return;
        }

        const newComment = {
            name: user?.displayName,
            text: feedback,
        }
        setComments([...comments, newComment]);
        setFeedback("");
    }


    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200  flex flex-col md:flex-row gap-10 p-10">
                <div className="flex-1">
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div className="flex-1 space-y-5">
                    <h2 className="text-4xl">{service_name}</h2>
                    <h3 className="text-xl">{counselor}</h3>
                    <p className="text-xs">{description}</p>
                    <p>Category: <span>{category}</span></p>
                    <p>Price: ${pricing}</p>
                    <div className="flex justify-between items-center">
                        <p>Duration:<span className="bg-base-300 py-1 px-2 rounded-lg">{duration}</span></p>
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>

            {/* Comment / Feedback section */}

            <div className="flex mt-10 justify-between ">
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold">Feedbacks</h2>

                    {/* feedback */}
                    <div className="">
                        <ul className="max-w-2xl">
                            {
                                comments.map((comment, idx) => (

                                    <li className="" key={idx}>
                                        
                                        <h2 className="font-semibold text-xl mb-1">{comment.name}</h2>
                                        <p className="break-words max-w-full overflow-auto bg-base-300   p-3 rounded-xl rounded-tl-none mb-1.5">{comment.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* ------------------------------------------------------- */}
                </div>
                <div>
                    <form onSubmit={handleFeedback} className="flex flex-col gap-2 flex-1">
                        <div>
                            <h2 className="text-2xl">Give me your Feedback</h2>
                        </div>
                        <input
                            onChange={(e) => setFeedback(e.target.value)}
                            value={feedback} name="feedback" type="text" placeholder="Type here" className="input w-md" />
                        <button className="btn">Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;