import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";


const Home = () => {
    const services = useLoaderData();
    


    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="p-3 max-w-6xl mx-auto my-10 lg:my-20">
                <h1 className="text-4xl font-lobstar font-semibold text-center text-[#c06b96]  ">Our Services</h1>
                 <div className="grid lg:grid-cols-3 gap-4">
                 {
                    services?.map(service=> <Services
                    key={service.id}
                    service={service}
                    ></Services>)
                 }     
                </div>  
            </div>
        </div>
    );
};

export default Home;