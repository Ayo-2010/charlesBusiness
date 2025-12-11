import React from 'react'
import aboutImage from '../assets/images/aboutusimage.jpg'
import { FaStar } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";


const AboutOurCompany = () => {
  return (
    <div className='flex bg-white w-full md:h-[450px] lg:h-[600px] lg:p-16 lg:gap-12 md:p-4 md:gap-0'>

      {/* for image section */}
      <div className=" AboutDiv bg-white w-1/2 h-full flex justify-center items-center">
        <img src={aboutImage} alt="About Us" className=" w-full h-full" />
      </div>


      {/* for content section */}
      <div className=" w-1/2 h-auto flex items-center justify-evenly flex-col px-2">
        
        {/* text section */}
        <div className="w-full h-auto bg-white lg:px-10 md:px-0">
          <h2 className='h2 md:mt-2 md:mb-2 max-sm:mb-5 max-md:text-4xl border-gray-200 border-b-2 border-spacing-y-60 py-2 '> About Our Company </h2>
          <p className='p max-sm:mt-5'> A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government they survive as soldiers
            of fortune to a deluxe apartment in the sky moving on up to the east side a family. </p>
          <p className='p max-sm:mt-5 md:hidden lg:block'> The government they survive as soldiers of fortune baby
            if you've ever wondered the east side to a deluxe apartment. </p>
        </div>

        {/* Iconsection */}
        <div className="w-full px-10 h-auto bg-white items-star justify-between flex flex-row max-sm:mb-2 max-sm:border-t-2 border-gray-200 pt-2">
          <div className="aboutIcons ">
            <FaStar className='IconSize' />
            <p className='h3'>
              Vision
            </p>
          </div>

           <div className="aboutIcons max-sm:border-x-2 border-gray-200 px-6">
            <FaMedal className='IconSize' />
            <p className='h3'>
              Missions
            </p>
          </div>

           <div className="aboutIcons ">
            <GiArcheryTarget  className='IconSize' />
            <p className='h3'>
              Goals
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutOurCompany