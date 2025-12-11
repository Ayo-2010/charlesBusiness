import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { BsBriefcaseFill } from "react-icons/bs";


const Information = () => {
    return (
        <div className="flex flex-col max-sm:flex max-lg:grid max-lg:grid-cols-2 md:flex-row bg-gray-100 max-lg:justify-normal items-center justify-between p-6 md:p-4 gap-6 max-lg:gap-0 md:gap-10">

            <div className="information w-full lg:w-1/4 md:w-full text-center md:text-left">
                <FaHandsHelping className='IconSize' />
                <h3 className='h3'>Consumer Insight </h3>
                <p className='paragraph'> The east side to a deluxe apartment in move on up to the east side </p>
            </div>

            <div className="information w-full lg:w-1/4 md:w-full text-center md:text-left">
                <HiSpeakerphone  className='IconSize' />
                <h3 className='h3'>Emerging Ideas </h3>
                <p className='paragraph'> The east side to a deluxe apartment in move on up to the east side </p>
            </div>


            <div className="information w-full lg:w-1/4 md:w-full text-center md:text-left">
                <HiUserGroup  className='IconSize' />
                <h3 className='h3'>Thought Leadership </h3>
                <p className='paragraph'> The east side to a deluxe apartment in move on up to the east side </p>
            </div>


            <div className="information w-full lg:w-1/4 md:w-full text-center md:text-left">
                <BsBriefcaseFill  className='IconSize' />
                <h3 className='h3'>Marketing Goals </h3>
                <p className='paragraph'> The east side to a deluxe apartment in move on up to the east side </p>
            </div>


        </div>
    )
}

export default Information