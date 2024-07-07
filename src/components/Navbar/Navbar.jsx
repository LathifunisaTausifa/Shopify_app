import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
  ];


  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className='shadow-md z-40 bg-white dark:bg-gray-900 dark:text-white duration-200 relative'>
            {/* Uppre Navbar */}
            <div className='bg-primary/40 py-2'>
                <div className='flex justify-between items-center container'>
                    {/* logo */}
                    <div>
                        <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={logo} className='w-10'/>
                        Shopify
                        </a>
                    </div>
                    {/* search */}
                    <div className='flex justify-between items-center gap-4'>
                    <div className='group relative hidden sm:block'>
                        <input type="search" placeholder='Search ' name='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] border border-gray-300 transition-all duration-200 rounded-full px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                    {/* cart button */}
                    <div>
                        <button className='group gap-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white py-1 px-4 flex items-center transition-all duration-200' onClick={()=> handleOrderPopup()}>
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                        </button>
                    </div>
                    {/* darkmode switch */}
                    <div>
                        <DarkMode/>
                    </div>
                    </div>
                </div>
            </div>
            {/* lower Nav */}
            <div data-aos="zoom-in" className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4 py-1'>
                    {
                        Menu.map((data)=>(
                            <li key={data.id}>
                            <a className='hover:text-primary inline-block px-4 duration-200' href= {data.link}>{data.name}</a>
                            </li>
                        ))
                    }
                    {/* dropdown */}
                    <li className='group relative cursor-pointer'>
                    <a href='#' className='flex gap-[2px] py-2 items-center hover:text-primary'>Trending Products
                        <span>
                        <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-150 p-2 rounded-md shadow-md bg-white text-black'>
                        <ul>
                            {
                            DropdownLinks.map((data)=>(
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block w-full p-2 hover:bg-primary/20 rounded-md'>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar
