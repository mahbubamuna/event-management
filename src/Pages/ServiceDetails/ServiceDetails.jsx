import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const ServiceDetails = () => {

    const serviceCard = useLoaderData();
    console.log(serviceCard)
    return (
        <div>
            <Navbar></Navbar>
            <div>

            </div>
        </div>
    );
};

export default ServiceDetails;