import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = ( ) => {
    const data = useLoaderData();
    const {id} = useParams();
    const [details , setDetails] =  useState({});

   
    useEffect(()=>{
        const serviceDetails = data.find((service) =>  parseInt(id) === service.id);
        setDetails(serviceDetails);
    },[data, id]);
    const { category, counselor, description, duration, image, pricing, raitng, service_name } = details;

    return (
        <div>
            <h2>{counselor}</h2>
        </div>
    );
};

export default ServiceDetails;