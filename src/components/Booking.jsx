import React, { useEffect } from 'react'
import { RiTreasureMapFill, RiCalendarFill } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import AOS from 'aos';
import 'aos/dist/aos.css';




const Booking = ({ icon }) => {


     useEffect(() => {
            AOS.init({
                offset: 200,
                duration: 800,
                easing: 'ease-in-sine',
                delay: 100,
            });
        }, []);


  return (
    <div className="max-w-[1100px] mx-auto py-20 px-4">
      <form
      data-aos="zoom-in"
        action=""
        className="
          bg-white/40 backdrop-blur-md rounded-[3rem] 
          grid gap-3 p-6 sm:p-8 md:p-10 
          shadow-md
          md:grid-cols-[1fr_1fr_max-content_1fr_max-content]
          items-center
        "
      >
        {/* Destination */}
        <div className="flex items-center gap-3 border border-black p-3 rounded-lg shadow-inner">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full outline-none text-gray-800 text-lg placeholder-black"
          />
          <RiTreasureMapFill className="text-black text-2xl" />
        </div>

        {/* Start Date */}
        <div className="flex items-center gap-3 border border-black p-3 rounded-lg shadow-inner">
          <input
            type="email"
            placeholder="E-mail*"
            className="w-full outline-none text-gray-800 text-lg placeholder-black"
          />
          <MdEmail className="text-black text-2xl" />
        </div>

        {/* End Date */}
        <div className="flex items-center gap-3 border border-black p-3 rounded-lg shadow-inner">
          <input
            type="number"
            placeholder="Phone*"
            className="w-full outline-none text-gray-800 text-lg placeholder-black"
          />
          <MdOutlinePhoneAndroid className="text-black text-2xl" />
        </div>

        {/* Button */}
        <button className='px-6 py-3 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white'>BOOK YOUR STYLE NOW</button>
      </form>
    </div>
  );
};

export default Booking;
