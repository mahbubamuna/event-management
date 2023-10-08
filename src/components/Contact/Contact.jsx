import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="my-5 lg:my-15">
            <h1 className="mb-5 text-5xl font-bold -4xl font-lobstar text-center text-[#c06b96]">Contact Us</h1>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/BZqj1pV/wedding-2110444-1280.jpg)', }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:flex gap-20">


                        {/* card */}
                        <div className="card my-10 w-full card-compact bg-transparent  shadow-xl">
                            <FaMapMarkerAlt className='text-5xl text-center font-semibold w-full text-[#c06b96]'></FaMapMarkerAlt>
                            <div className="card-body font-josefin text-black ">
                                <h2 className="card-title text-3xl mx-auto">Location</h2>
                                <p >Unica Event Agency <br />
                                    85 Fentiman Ave <br />
                                    Ottawa, ON K1S 0T7</p>

                            </div>
                        </div>
                        <div className="card w-full my-10 card-compact bg-transparent  shadow-xl">
                            <FaPhoneAlt className='text-5xl text-center font-semibold w-full text-[#c06b96]'></FaPhoneAlt>
                            <div className="card-body font-josefin text-black ">
                                <h2 className="card-title text-3xl mx-auto">Phone </h2>
                                <p>Phone: 12345678 <br />
                                    email:abc@gmail.com<br />
                                    fax: 11-22-3344</p>

                            </div>
                        </div>
                        <div className="card w-full my-10 card-compact bg-transparent  shadow-xl">
                            <FaRegClock className='text-5xl text-center font-semibold w-full text-[#c06b96]'></FaRegClock>
                            <div className="card-body font-josefin text-black ">
                                <h2 className="card-title text-3xl mx-auto">Time </h2>
                                <p>Monday – Friday <br />
                                    8.00 am – 5.00 pm <br />
                                    Weekend Closed</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;