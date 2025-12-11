import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

function Topbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-[#041233] text-gray-200 py-4.5 px-30 l sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between text-sm py-2 relative">
          {/* Left: nav (collapses on small screens) */}
          <div className="flex items-center gap-6">
            {/* Mobile hamburger */}
            <button
              className=" md:hidden inline-flex items-center justify-center left-0 p-2 text-gray-200 hover:text-white"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

            {/* Nav: hidden on small screens unless `open` */}
            <nav className={`text-gray-300 ${open ? 'flex flex-col gap-3 w-full bg-[#041233] relative w-3/5 left-0 top-full p-4 md:static md:flex md:items-center md:gap-4 md:bg-transparent' : 'hidden md:flex md:items-center md:gap-4'}`}>
              <a href="#" className="flex items-center gap-2 text-white font-semibold">HOME <span className="text-xs">▾</span></a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white">PAGES</a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white">SERVICE</a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white">PORTFOLIO</a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white">BLOG</a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white">CONTACT</a>
            </nav>
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-gray-400">
              <a href="#" aria-label="facebook" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" aria-label="twitter" className="hover:text-white"><FaTwitter /></a>
              <a href="#" aria-label="linkedin" className="hover:text-white"><FaLinkedinIn /></a>
              <a href="#" aria-label="pinterest" className="hover:text-white"><FaPinterestP /></a>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative text-gray-300 hover:text-white" aria-label="cart">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1">2</span>
              </button>
              <button className="text-gray-300 hover:text-white" aria-label="search">
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
