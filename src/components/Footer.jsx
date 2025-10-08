import React from 'react'
import { ImInstagram } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <section className='bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-[#a69f7d]'>
        <h1 className="text-black font-bold text-5xl ">HAIR RAP BY <span className=" text-[#a60f7d]">YO YO</span></h1>
        <p className="text-lg text-center font-semibold text-slate-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error dolorem, corrupti rem deleniti expedita placeat. Dolorem velit obcaecati placeat.
        </p>
        <div id="icons" className='flex justify-center items-center gap-4'>
          <div id="icon-box" className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 hover:scale-110 transform transition-transform'>
            < ImInstagram className="size-7 fill-white" />
          </div>
          <div id="icon-box" className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 hover:scale-110 transform transition-transform'>
            < FaLinkedin className="size-7 fill-white" />
          </div>
          <div id="icon-box" className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 hover:scale-110 transform transition-transform'>
            < SiGmail className="size-7 fill-white" />
          </div>
          <div id="icon-box" className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 hover:scale-110 transform transition-transform'>
            < FaGithub className="size-7 fill-white" />
          </div>
          <div id="icon-box" className="bg-[#a39446] p-3 sm:p-4 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 hover:scale-110 transform transition-transform">
  <FaXTwitter className="size-5 sm:size-7 fill-white" />
</div>

        </div>
        <div className="text-center text-gray-500 text-xs md:text-sm border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} Piyush.codes08. All rights reserved.
      </div>
      </section>
      <div data-aos="slide-right" data-aos-delay="200" id='icon-box' className='bg-[#a69f7d] p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 botton-6 raight-6 lg:right-6 '>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          < FaArrowUp className="size-8" />
        </Link>
      </div>
      
    </>
  )
}

export default Footer