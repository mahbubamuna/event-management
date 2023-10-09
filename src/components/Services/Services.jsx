import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


const Services = ({ service }) => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    const { id, name, image, price, short_description } = service;

    return (
        <div>
            <div className="card bg-[#D9C6BF] shadow-xl mt-20" data-aos= "fade-right">
                <figure className="px-5 pt-5">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body font-josefin">
                    <h2 className="card-title text-2xl border-b-2">{name}</h2>
                    <p className="text-[#c06b96] text-2xl ">{price}</p>
                    <p>{short_description}</p>
                    <div className="card-actions">
                        <Link to={`/service/${id}`}><button className="btn btn-neutral">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;