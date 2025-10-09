import React from 'react'
import react, { useEffect } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import heroimg from "../assets/images/hero.jpg"
import sissor from "../assets/images/sissor.png"
import menshair from "../assets/images/menshair.png"
import trimmer from "../assets/images/trimmer.png"
import womenshair from "../assets/images/womenhair.png"
import img3 from "../assets/images/img3.jpg"
import Booking from '../components/Booking.jsx'
import { RiTelegram2Fill } from "react-icons/ri";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <>

            <section
                id="hero"
                className="w-full bg-right md:bg-center bg-cover bg-bottom flex flex-col justify-center items-center text-center md:text-left"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url(${img3})`,
                }}
            >
                {/* Hero content */}
                <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20 px-4 md:px-12 py-16 md:py-24">

                    {/* Left content */}
                    <div id="content-box" className="flex flex-col justify-center items-start gap-8">
                              <p data-aos="zoom-in" className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-relaxed tracking-wide animate-pulse">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-blue-500">
            Welcome to the world of shine, style, and swagger —
          </span>
          
          <h1 data-aos="zoom-in" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
                            Hair Rap By Yo Yo Style
                        </h1>
        </p>

                       

                 
                    </div>

                    {/* Right Image Placeholder (optional) */}
                    <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full flex justify-center">
                        {/* You can place a hero image here if needed */}
                    </div>
                </div>

                {/* Booking form below hero content */}
                <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 -mt-6 md:-mt-10 relative z-10">
                    <Booking icon={<RiTelegram2Fill />} />
                </div>
            </section>
            <section>
                <section className="bg-gray-50 py-16 px-6">
                    <div
                        data-aos="slide-up"
                        id="icon-list"
                        className="
          max-w-5xl mx-auto
          flex flex-col md:flex-row md:flex-wrap 
          justify-center items-start gap-8
        "
                    >
                        {/* Address */}
                        <div className="flex justify-start items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition w-full md:w-[45%]">
                            <FaLocationDot className="text-black text-3xl" />
                            <h1 className="text-lg md:text-xl text-gray-800 font-semibold">
                                123 Main Street, Jaipur, Rajasthan 302001
                            </h1>
                        </div>

                        {/* Phone */}
                        <div className="flex justify-start items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition w-full md:w-[45%]">
                            <MdOutlinePhoneAndroid className="text-black text-3xl" />
                            <h1 className="text-lg md:text-xl text-gray-800 font-semibold">
                                +91 637-114-9273
                            </h1>
                        </div>

                        {/* Email */}
                        <div className="flex justify-start items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition w-full md:w-[45%]">
                            <MdEmail className="text-black text-3xl" />
                            <h1 className="text-lg md:text-xl text-gray-800 font-semibold">
                                info@yoyohairrap.com
                            </h1>
                        </div>

                        {/* Support */}
                        <div className="flex justify-start items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition w-full md:w-[45%]">
                            <FaHeadphones className="text-black text-3xl" />
                            <h1 className="text-lg md:text-xl text-gray-800 font-semibold">
                                support@yoyohairrap.com
                            </h1>
                        </div>
                    </div>
                </section>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-4 gap-10 justify-center items-start w-full md:px-[120px] px-10 py-10'>

                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={sissor} alt={sissor} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold capitalize'> Classic Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer '>Explore More</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={menshair} alt={menshair} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold capitalize'>Men’s Grooming</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer '>Explore More</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={trimmer} alt={trimmer} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold capitalize'>Trimmer Styling</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer '>Explore More</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={womenshair} alt={womenshair} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold capitalize'>Women’s Hair Styling</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer '>Explore More</button>
                </div>
            </section>
        </>
    )
}

export default Home