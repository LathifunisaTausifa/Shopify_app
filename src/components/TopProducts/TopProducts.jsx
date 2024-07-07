import React from 'react'
import Img1 from "../../assets/shirts/shirt.png";
import Img2 from "../../assets/shirts/shirt2.png";
import Img3 from "../../assets/shirts/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className='container'>
        {/* header section */}
        <div className='text-left mb-24'>
          <p data-aos="fade-up" className='text-primary text-sm'>Top Rated Products for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>tausi hina jas janani</p>
        </div>

        {/*body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {
            ProductsData.map((data) => (
              <div data-aos='zoom-in' className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                {/* img Selection */}
                <div className='h-[100px]'>
                  <img src={data.img} className='max-w-[140px] block mx-auto translate -translate-y-20 group-hover:scale-105 drop-shadow-md duration-300' />
                </div>
                {/* details section */}
                <div className='p-4 text-center'>
                  {/* star rating */}
                  <div className='flex justify-center text-center gap-1 w-full'>
                    <FaStar className='text-primary'></FaStar>
                    <FaStar className='text-primary'></FaStar>
                    <FaStar className='text-primary'></FaStar>
                    <FaStar className='text-primary'></FaStar>
                  </div>
                  <h1 className='text-xl font-bold'>{data.title}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                  <button onClick={handleOrderPopup} className='rounded-full bg-primary text-white mt-4 py-1 px-4 group-hover:scale-105
                duration-300 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
