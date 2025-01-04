import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
function slink() {
  return (
    <div>



      {/* Social Media Links */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-lg mb-4">Follow us on <span className="text-blue-600">social media</span></p>
        <div className="flex justify-center space-x-6 text-gray-700">
          <a
            href="https://www.facebook.com/farooque.maliCk.871"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/farooquemalik/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://x.com/FarooqueMalik71"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/farooque-malik871"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>





    </div>
  )
}

export default slink