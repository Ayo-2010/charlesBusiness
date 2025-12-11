import React from 'react'
import img from '../assets/images/10.jpg'

function consultation() {
  return (
    <div className='w-full flex flex-col py-15 space-y-10'>

      <div className='flex flex-col'>
        <h1 className='text-center text-4xl text-blue-950 font-extrabold'>FREE CONSULTATION</h1>
        <p className='text-center'>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
      </div>

      <form className='flex-col h-auto w-full'>

        <div className="flex m-auto w-5/7 h-auto flex-row shadow-2xl consultation-card">

          <div className='w-1/2 lg:block md:hidden none'>
            <img className='h-full w-full object-cover' src={img} alt="consultation" />
          </div>

          <div className='lg:w-1/2 md:w-full text-gray-500  px-5 py-10 ' >

            <input className='mx-1 my-3 p-3 border-b border-0 w-full' type="text" placeholder='Name *' />
            <input className='mx-1 my-3 p-3 border-b border-0 w-full' type="text" placeholder='Phone*' />
            <input className='mx-1 my-3 p-3 border-b border-0 w-full' type="email" placeholder='Email *' name="" id="" />

            <select className='mx-1 my-3 p-3 border-b border-0 w-full' id="exampleSelect1">
              <option>Service you’re looking for?</option>
              <option>Business Services</option>
              <li list-></li>
              <option>Consumer Product</option>
              <option>Financial Services</option>
              <option>Software Research</option>
            </select>

            <textarea className='mx-1 my-3 p-10 border-b border-0 w-full  ' placeholder="Message"></textarea>

            <button className="hover:bg-white hover:text-[#555555] border-2 border-blue-950 text-white bg-blue-950 font-bold py-3 px-7 rounded-md">GET A QUOTE</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default consultation