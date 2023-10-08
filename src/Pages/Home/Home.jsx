import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";



const Home = () => {
    const services = useLoaderData();



    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>

            {/* services part */}
            <div className="p-3 max-w-6xl mx-auto my-5 lg:my-15">
                <h1 className="text-4xl font-lobstar font-semibold text-center text-[#c06b96]  ">Our Services</h1>
                <div className="grid lg:grid-cols-3 gap-1 md:gap-4">
                    {
                        services?.map(service => <Services
                            key={service.id}
                            service={service}
                        ></Services>)
                    }
                </div>

            </div>

            {/* about part */}
            <About></About>

            {/* gallery */}
            <Gallery></Gallery>

            {/*contact */}
            <Contact></Contact>

            
            {/* footer */}
        </div>
    );
};

export default Home;