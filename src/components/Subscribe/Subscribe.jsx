import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

const BannnerImg ={
    backgroundImage : `url(${Banner})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    height : "100%",
    width : "100%",
};

const Subscribe = () => {
  return (
    <div style={BannnerImg} className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' data-aos="zoom-in" >
      <div className='container backdrop:blur-sm py-10'>
        <div className='space-y-6 mx-auto max-w-xl'>
            <h1 className='text-2xl !font-semibold text-center sm:text-left sm:text-4xl' >Get notified about our products</h1>
            <input type='text' data-aos="fade-up" placeholder='Enter your email' className='w-full p-3 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
