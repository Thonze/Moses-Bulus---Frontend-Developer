import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-black p-4 ">
    <nav className="bg-black p-4 ">
      <div className="container mx-auto md:flex-row md:justify-between md:flex md:items-center">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-semibold"><img src='logo.png' className='h-8  md:mb-0'  />
          <button className='lg:hidden md:hidden outline outline-white text-white text-sm'>Explore</button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
