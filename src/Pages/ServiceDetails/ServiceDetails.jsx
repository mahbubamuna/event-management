import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ServiceDetails = () => {
    const details = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details?.find(detail => detail.id === idInt);
    console.log(detail)

    const { name, detailed_description, image, price } = detail;

    const handlePurchase = () =>{

        swal({
            title: "Thank You!",
            text: "You purchased the package!",
            icon: "success",
          });
    }

    return (
        <div className="p-3 max-w-6xl mx-auto my-5 lg:my-15">
            <div className="hero min-h-screen bg-[#D9C6BF]">
                <div className="hero-content grid md:grid-cols-2" data-aos= "fade-up">
                    <img src={image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 data-aos= "fade-right" className="text-3xl lg:text-5xl font-bold font-lobstar">{name}</h1>
                        <p data-aos= "fade-left" className="py-6 font-josefin">{detailed_description}</p>
                        <p data-aos= "fade-right" className="pb-6 font-lobstar text-4xl text-[#b35182]">{price}</p>
                        <button onClick={handlePurchase} className="btn btn-neutral hover:bg-[#c06b96] font-josefin">Purchase</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;