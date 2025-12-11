import React from 'react'
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"

function OurTeam() {
  return (
    <div className='w-full lg:h-screen flex flex-col items-center md:py-10 lg:py-24 px-16 '>
            <h4 className='h4'> Our Team </h4>
            <p className='p mt-4'> A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers </p>
        
            <div className='lg:flex p-4 md:grid md:grid-cols-2 gap-10 h-screen'>
                <div className="TeamMem">
                    <img src={img1} alt="" />
                    <h3 className='h3'>Richards Mills </h3>
                    <p className='paragraph'> Sales Consultant</p>
                </div>
                <div className="TeamMem">
                    <img src={img2} alt="" />
                    <h3 className='h3'>Mike Hussey </h3>
                    <p className='paragraph'> Founder, CEO</p>
                </div>
                <div className="TeamMem">
                    <img src={img3} alt="" />
                    <h3 className='h3'>Jenilia D’sosa</h3>
                    <p className='paragraph'> Marketing Lead</p>
                </div>
                <div className="TeamMem">
                    <img src={img4} alt="" />
                    <h3 className='h3'>David Warner </h3>
                    <p className='paragraph'>SEO Analyst </p>
                </div>
            </div>
              
        
          </div>
  )
}

export default OurTeam