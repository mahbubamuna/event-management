

const Details = ({detail}) => {
    const { id, short_title, image, price, details_description} = detail;
    return (
        <div>
             <div className="hero min-h-screen bg-[#D9C6BF] my-10 rounded-md">
                <div className="hero-content grid md:grid-cols-2">
                    <img src={image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold font-lobstar">{short_title}</h1>
                        <p className="py-6 font-josefin">{details_description}</p>
                        <p className="pb-6 font-lobstar text-4xl text-[#b35182]">{price}</p>
                        {/* <button onClick={handlePurchase} className="btn btn-neutral hover:bg-[#c06b96] font-josefin">Purchase</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;