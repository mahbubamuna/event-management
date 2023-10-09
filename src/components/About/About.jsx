import about from "../../assets/about.jpg";

const About = () => {
    return (
        <div>
            <div className="p-3 max-w-6xl mx-auto  my-20">
                <h1 className="text-4xl font-lobstar font-semibold text-center text-[#c06b96]">About Us</h1>
                <div className="hero mt-10 rounded-md p-10 bg-[#D9C6BF]">
                    <div className="hero-content grid md:grid-cols-2">
                        <div><img src={about} className=" rounded-lg shadow-2xl" /></div>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <p className="py-6 font-josefin text-xl">We are dedicated to transforming your wedding dreams into breathtaking realities. With a wealth of experience and a passion for crafting unique and magical events, we take pride in being your trusted wedding event management partner. <br />
                                Our journey began with a love for weddings and a commitment to exceeding expectations. We believe that every couple is unique, and that belief guides our personalized approach to event planning. We listen to your ideas, understand your vision, and work closely with you to ensure that your special day is an authentic reflection of your love story.</p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;