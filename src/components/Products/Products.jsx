import React from 'react'
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 mx-auto max-h-[600px]'>
          <p data-aos="fade-up" className='text-primary text-sm'>Top Selling Products for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Well Known For Quality</p>
        </div>
        {/* body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up" data-aos-delayy={data.aosDelay}
                className='space-y-3' key={data.id}>
                <img src={data.img} className='h-[220px] w-[150px] object-cover rounded-md' />
                <div>
                  <h1 className='font-semibold'>{data.title}</h1>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>{data.color}</p>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all bvutton */}
          <div className='flex justify-center'>
            <button className='bg-primary text-white cursor-pointer mt-10 py-2 px-4 rounded-md'>View All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
