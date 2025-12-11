import React from 'react'
import bg from "../assets/images/image.png"

export default function Testimonial(){
  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* translucent overlay to improve contrast */}
      <div className="bg-black/25">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="bg-white rounded-lg shadow-lg p-12 text-center relative">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  “ A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family. ”
                </p>

                <h4 className="text-xl font-semibold">Rashed Ka.</h4>
                <div className="text-sm text-gray-500 mb-6">Founder, Mnc Inc.</div>

                <div className="flex justify-center items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                </div>
              </div>
            </div>
            {/* empty flex child to let background photo show on wide screens */}
            <div className="hidden md:block md:flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
