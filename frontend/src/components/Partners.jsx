import React from "react"
import p1 from "../assets/images/p-1.png"
import p2 from "../assets/images/p-2.png"
import p3 from "../assets/images/p-3.png"
import p4 from "../assets/images/p-4.png"
import p5 from "../assets/images/p-5.png"

export default function Partners() {
  const logos = [p1, p2, p3, p4, p5]

  return (
    <section className="bg-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:space-y-5 ">
          {/* Left heading */}
          <div className="w-full  flex justify-center items-center ">
            <h3 className="flex  text-2xl sm:text-3xl font-semibold">
              OUR PARTNERS
            </h3>
          </div>

          {/* Logos row */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center">
              {logos.map((src, i) => (
                <div key={i} className="flex items-center justify-center p-5 ">
                  <img
                    src={src}
                    alt={`Partner ${i + 1}`}
                    className="h-auto object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
