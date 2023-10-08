

const Gallery = () => {
    return (
        <div>
            <h1 className="text-4xl font-lobstar font-semibold text-center text-[#c06b96]  ">Gallery</h1>

            <p className=" font-josefin font-bold pt-5 text-2xl text-center">Our Recent Projects</p>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 p-3 max-w-6xl mx-auto lg:my-20'>
            <div>
                <img src="https://i.ibb.co/DwBNQKq/gallery4.jpg" alt="" />
            </div>
            <div>
                <img src="https://i.ibb.co/qdBrMzk/gallery2.jpg" alt="" />
            </div>
            
            <div>
                <img src="https://i.ibb.co/hsZjxqT/gallery7.jpg" alt="" />
            </div>
            <div>
                <img src="https://i.ibb.co/SmSdgMs/gallery6.jpg" alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Gallery;