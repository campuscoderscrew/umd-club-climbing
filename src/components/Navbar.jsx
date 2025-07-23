'use client'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-8">
      {/* Logo on the top left */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="UMD Climbing Club Logo"
          width={70}
          height={70}
        />
      </div>

      {/* Navigation links on the right */}
      <nav className="bg-black bg-opacity-90 backdrop-blur-md shadow-md px-20 py-3 rounded-full flex space-x-22">
        <a href="#home" className="text-white-700 hover:text-orange-400 font-medium transition-colors duration-200">Home</a>
        <a href="#about" className="text-white-700 hover:text-orange-400 font-medium transition-colors duration-200">About</a>
        <a href="#times" className="text-white-700 hover:text-orange-400 font-medium transition-colors duration-200">Location/Times</a>
        <a href="#gallery" className="text-white-700 hover:text-orange-400 font-medium transition-colors duration-200">Gallery</a>
        <a href="#join" className="text-white-700 hover:text-orange-400 font-medium transition-colors duration-200">Join Us</a>
      </nav>
    </div>
  )
}
