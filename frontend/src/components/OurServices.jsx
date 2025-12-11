import React from 'react'
import aboutImage from '../assets/images/aboutusimage.jpg'

const OurServices = () => {
  return (
      <div className='w-full lg:flex flex-col items-center h-auto md:py-10 md:px-2  lg:py-24 lg:px-16'>
          <h4 className='h4'> Our Service </h4>
          <p className='p mt-4'> A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers </p>
    
          <div className='w-full h-auto md:grid md:grid-cols-2 gap-2 bg-white lg:flex items-center justify-between flex-wrap gap-y-8 p-2 mt-8'>
              
              


              <div className='OurserviceDiv'>
                  <div className='flex items-center  justify-center p-3'>
                        <img src={aboutImage} alt="About Us" className="w-auto h-full" />
                  </div>
                
                  <div className='flex flex-col p-4'>
                      <h4 className="font-semibold text-2xl"> Business Services </h4>
                      <h5 className="font-normal"> The tiny ship today stiller</h5>
                      <a className="font-semibold mt-8" href='#'> Read More </a>
                  </div>
              </div>
              <div className='OurserviceDiv'>
                  <div className='flex items-center  justify-center p-3'>
                        <img src={aboutImage} alt="About Us" className="w-auto h-full" />
                  </div>
                
                  <div className='flex flex-col p-4'>
                      <h4 className="font-semibold text-2xl"> Business Services </h4>
                      <h5 className="font-normal"> The tiny ship today stiller</h5>
                      <a className="font-semibold mt-8" href='#'> Read More </a>
                  </div>
              </div>
              <div className='OurserviceDiv'>
                  <div className='flex items-center  justify-center p-3'>
                        <img src={aboutImage} alt="About Us" className="w-auto h-full" />
                  </div>
                
                  <div className='flex flex-col p-4'>
                      <h4 className="font-semibold text-2xl"> Business Services </h4>
                      <h5 className="font-normal"> The tiny ship today stiller</h5>
                      <a className="font-semibold mt-8" href='#'> Read More </a>
                  </div>
              </div>


              <div className='OurserviceDiv md:flex sm:hidden'>
                  <div className='flex items-center  justify-center p-3'>
                        <img src={aboutImage} alt="About Us" className="w-auto h-full" />
                  </div>
                
                  <div className='flex flex-col p-4'>
                      <h4 className="font-semibold text-2xl"> Business Services </h4>
                      <h5 className="font-normal"> The tiny ship today stiller</h5>
                      <a className="font-semibold mt-8" href='#'> Read More </a>
                  </div>
              </div>


              <div className='OurserviceDiv md:flex sm:hidden'>
                  <div className='flex items-center  justify-center p-3'>
                        <img src={aboutImage} alt="About Us" className="w-auto h-full" />
                  </div>
                
                  <div className='flex flex-col p-4'>
                      <h4 className="font-semibold text-2xl"> Business Services </h4>
                      <h5 className="font-normal"> The tiny ship today stiller</h5>
                      <a className="font-semibold mt-8" href='#'> Read More </a>
                  </div>
              </div>


              <div className='OurserviceDiv md:flex sm:hidden'>
                  <div className='flex items-center  justify-center p-3'>
                        <img src={aboutImage} alt="About Us" className="w-auto h-full" />
                  </div>
                
                  <div className='flex flex-col p-4'>
                      <h4 className="font-semibold text-2xl"> Business Services </h4>
                      <h5 className="font-normal"> The tiny ship today stiller</h5>
                      <a className="font-semibold mt-8" href='#'> Read More </a>
                  </div>
              </div>
          </div>
          
<p className='font-semibold text-center text-2xl mt-8'> You can also send us an email and we’ll get in touch shortly, or Call us <br />
<a href="#"> <span className='text-underline'>info@support.com (or) +1 234 6780 900</span></a></p>

      </div>
  )
}

export default OurServices