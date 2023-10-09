import { useLoaderData } from "react-router-dom";
import Details from "../../components/Details/Details";


const Packages = () => {
    const details = useLoaderData();

    return (
        <div className="p-3 max-w-6xl mx-auto my-5 lg:my-15">

            <h1 className="text-4xl font-lobstar font-semibold text-center text-[#c06b96]  ">Our Packages</h1>

            {
                details?.map(detail => <Details
                key={detail.id}
                detail={detail}
                >

                </Details>)
            }

           
        </div>
    );
};

export default Packages;