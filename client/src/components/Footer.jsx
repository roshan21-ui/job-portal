import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white pt-16 pb-6 mt-20">
      
      {/* Top Section */}
      <div className="container mx-auto px-6 2xl:px-20 grid md:grid-cols-3 gap-10">
        
        {/* Left - Logo & Description */}
        <div>
          <img src={assets.logo} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm leading-6">
            Your Job Portal helps users find jobs faster and smarter with 
            modern tools and seamless experience.
          </p>

          {/* App Buttons */}
          <div className="flex gap-4 mt-5">
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              Google Play
            </button>
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              App Store
            </button>
          </div>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">
            History / Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">

  <li>
    <a href="https://roshan-chat-app.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
      Chat Application💬
    </a>
  </li>

  <li>
    <a href="https://github.com/roshan21-ui" target="_blank" rel="noopener noreferrer" className="hover:text-white">
      GitHub🌟
    </a>
  </li>
  <li>
    <a href="https://leetcode.com/Roshan_212004/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
      LeetCode🤔
    </a>
  </li>
</ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            📞 +91 9344749978
          </p>
          <p className="text-gray-400 text-sm">
            ✉️ kiruthickroshan21@gmail.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2026 Job Portal. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
