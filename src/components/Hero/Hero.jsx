import React from "react";
import Image1 from "../../assets/Hero/women.png";
import Image2 from "../../assets/Hero/shopping.png";
import Image3 from "../../assets/Hero/sale.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

const Hero = ({handleOrderPopup}) => {
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
            {/* backgrround data  */}
            <div className="bg-primary/40 h-[700px] w-[700px] absolute  -top-1/2 right-0 -z-9 rotate-45 rounded-3xl">
            </div>
            {/* hero */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 mx-5 px-5">
                                {/* text section */}
                                <div className="flex flex-col justify-center  gap-4 pt-12 sm:pt-0  order-2 sm:order-1 relative z-10">
                                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold ">{data.title}
                                    </h1>
                                    <p className="text-sm" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">{data.description}                            </p>
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                        <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-4 py-2 hover:scale-105 duration-200">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* img scection */}
                                <div className="ml-5 order-1 sm:order-2 ">
                                    <div className="relative z-10">
                                        <img
                                            src={data.img} className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default Hero