import React from 'react'
import logo from '../assets/images/logo.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnreadSharp } from "react-icons/io5";


const Header = () => {
  return (
    <div className="header w-full">

      {/* heading  section starts here */}
      <div className=' flex sm:mx-5 max-sm:block my-2 gap-5'>

        {/* logo section goes here */}
        <div className="xl:w-5xl my-auto sm:flex sm:justify-center logo-div">
          <img src={logo} alt="Logo" className=" h-16 mx-0" />
        </div>
        {/* logo section ends here */}

        <div className="heading flex w-full items-start  justify-around my-auto">
          {/* address section goes here */}
          <div className=" flex my-auto">
            <FaLocationDot className='headerIcon' />
            <p className='headerInfo '>
              <span className='text-red-600'> Address: </span>

              <span className='text-black -mt-3'>2A0, Queenstown St, USA.</span>
            </p>
          </div>
          {/* address section ends here */}

          {/* Mail us section goes here */}
          <div className="mailus flex my-auto"> 
            <IoMailUnreadSharp className='headerIcon' />
            <p className='headerInfo'>
              <span className='text-red-600 mt-1'> Mail Us </span>

              <span className='text-black -mt-3'>supporthere@mail.com.</span>
            </p>
          </div>
          {/* mail us section ends here */}

          {/* Quotes section goes here */}
          <div className="quotes flex items-center justify-end my-auto sm:10  h-20">
            <button className=" bg-white text-[#555555] border-2 border-blue-950 hover:text-white hover:bg-blue-950 font-bold py-2 px-4  sm:px-3 rounded-md">
              GET A QUOTE
            </button>
          </div>
          {/* wuotes section ends here */}

         </div>



      </div>
      {/* heading  section ends here */}


    </div>
  )
}

export default Header