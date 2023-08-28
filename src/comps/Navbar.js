import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-black p-4 ">
      <div className="container mx-auto md:flex-row md:justify-between md:flex md:items-center">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl mx-auto font-semibold "><img src='logo.png' className='h-8  md:mb-0'  /></div>
        </div>
      </div>
    </nav>

  )
}
