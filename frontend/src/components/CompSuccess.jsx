import React from 'react'

function CompSuccess() {
  return (
    <div className='w-full lg:h-4/5 md:h-3/5  flex flex-col justify-center items-center bg bg-gray-100 '>
        
                <div className="pattern-bg">
                    <h4 className=' text-blue-800 text-xl text-center'> Company Success </h4>
                <p className='h4 mt-4'>Some fun facts about our consulting </p>
            
                <div className='lg:flex lg:justify-center p-4 md:gap-10 md:grid md:grid-cols-2'>
                    <div className="fact m-auto">
                        <h3 className='factNum'>30+ </h3>
                        <p className='factPar'> Years of Excellence</p>
                    </div>
                    <div className="fact m-auto">
                        <h3 className='factNum'>100%</h3>
                        <p className='factPar'> Client Satisfaction</p>
                    </div>
                    <div className="fact m-auto">
                        <h3 className='factNum'>53<span className="par">k</span> </h3>
                        <p className='factPar'> Cases Completed</p>
                    </div>
                    <div className="fact m-auto">
                        <h3 className='factNum'>24 </h3>
                        <p className='factPar'> Consultants</p>
                    </div>
                </div>
                </div>
                  
            
              </div>
  )
}

export default CompSuccess