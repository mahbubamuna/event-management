import error404 from "../../assets/error.jpg"
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={error404} alt="" className="w-3/4 mx-auto h-screen" />
        </div>
    );
};

export default ErrorPage;