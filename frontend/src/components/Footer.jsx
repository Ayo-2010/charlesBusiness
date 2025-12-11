import React from 'react'
import thumb1 from "../assets/images/img1.jpg"
import thumb2 from "../assets/images/img2.jpg"
import { FiPhone, FiCalendar, FiChevronUp } from 'react-icons/fi'

function Footer() {
  return (
    <>
      <footer className="bg-[#071a3d] text-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About column */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">ABOUT OUR CONSULTING</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                That started from this tropic port aboard this tiny ship today still want by team government they survive on up to the thetre east side to a deluxe as soldiers of artics fortune.
              </p>

              <div className="flex items-center gap-3 text-gray-100">
                <FiPhone className="text-2xl" />
                <div>
                  <div className="text-sm">Any Queries :</div>
                  <div className="text-md font-semibold">(+1) 234 567 900</div>
                </div>
              </div>
            </div>

            {/* Recent posts column */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">RECENT POSTS</h4>

              <div className="space-y-6">
                <article className="flex items-start gap-4">
                  <img src={thumb1} alt="post 1" className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h5 className="text-white font-semibold">Till wanted by theam govern they survive as soldiers.</h5>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                      <FiCalendar />
                      <span>Feb 06, 2018</span>
                    </div>
                  </div>
                </article>

                <article className="flex items-start gap-4">
                  <img src={thumb2} alt="post 2" className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h5 className="text-white font-semibold">World don't move to beat of just one drum.</h5>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                      <FiCalendar />
                      <span>Mar 20, 2018</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Solutions column */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">SOLUTIONS</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="mt-1 text-sm">○</span> Travel and Aviation</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-sm">○</span> Business Services</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-sm">○</span> Consumer Products</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-sm">○</span> Financial Services</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-sm">○</span> Software Research</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-sm">○</span> Quality Resourcing</li>
              </ul>
            </div>

            {/* Newsletter column */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">NEWSLETTER</h4>

              <form className="space-y-4 max-w-sm">
                <div>
                  <label className="sr-only">Name</label>
                  <input type="text" placeholder="Name *" className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-100 focus:outline-none" />
                </div>
                <div>
                  <label className="sr-only">Email</label>
                  <input type="email" placeholder="Email *" className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-100 focus:outline-none" />
                </div>

                <button className="bg-white text-[#071a3d] px-6 py-3 rounded-md font-semibold">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#051233] text-gray-400 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">© Copyrights 2018. All Rights Reserved.</div>

          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Solutions</a>
            <a href="#" className="hover:text-white">FAQ's</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>

          <button className="ml-4 p-2 bg-[#0b2b5a] rounded text-white" aria-label="Back to top">
            <FiChevronUp />
          </button>
        </div>
      </div>
    </>
  )
}

export default Footer