import Banner from "../Banner/Banner";




const Header = () => {
    return (
        <div>
            
            <div className="h-screen hero " style={{ backgroundImage: 'url(https://i.ibb.co/Y0NSNB2/banner.jpg)' }}>
            
                <div className="hero-overlay bg-opacity-20"></div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;