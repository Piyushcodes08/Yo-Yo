import React from 'react'
import whyimg from "../assets/images/why3.webp"
import { FaAngleDoubleRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WhyChoose = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section
      id='about'
      className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover '
      style={{ backgroundImage: ` linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${whyimg})` }}
    >
       
      <div
  data-aos="zoom-in"
  className="flex flex-col justify-center items-center gap-10 bg-white backdrop-blur-md p-10 rounded-xl md:w-[40%] w-full shadow-lg"
>
  <h1 className="text-4xl font-bold text-[#a69f7d]"> WORKING HOURS</h1>

  <div className="flex flex-col justify-center items-center gap-3">
    <p className="text-xl text-black font-medium">SUNDAY — 10:00 AM to 8:00 PM</p>
    <p className="text-xl text-black font-medium">MONDAY — 10:00 AM to 8:00 PM</p>
    <p className="text-xl text-black font-medium">TUESDAY — 10:00 AM to 8:00 PM</p>
    <p className="text-xl text-black font-medium">WEDNESDAY — 10:00 AM to 8:00 PM</p>
    <p className="text-xl text-black font-medium">THURSDAY — 10:00 AM to 8:00 PM</p>
    <p className="text-xl text-black font-medium">FRIDAY — 10:00 AM to 8:00 PM</p>
    <p className="text-xl text-black font-medium">SATURDAY — 10:00 AM to 8:00 PM</p>
  </div>

  <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-5 transition-all duration-300">
    BOOK YOUR SLOT
  </button>
</div>


      <div data-aos="slide-up" data-aos-delay="200" className='md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit'>
        <h1 className='text-6xl text-white font-bold text-center'>Why Choose Us</h1>
        <p className='text-[20px] font-light text-white text-start'>
          Step into Yo-Yo Hair Rap, where style meets comfort. We combine creativity, care, and expertise to give you a look you’ll love.
        </p>
        <div id="icon-list" className='flex flex-col justify-center items-start gap-4'>
          <div id="icon-box" className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Always Welcoming Environment</h1>
          </div>
          <div id="icon-box" className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Professional & Skilled Staff</h1>
          </div>
          <div id="icon-box" className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>High Quality Products</h1>
          </div>
          <div id="icon-box" className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Relaxing Ambience</h1>
          </div>
          <div id="icon-box" className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Affordable Pricing</h1>
          </div>
          <button className='text-black px-10 py-4 bg-white hover:bg-[#a69f7d] hover:text-black rounded-xl font-bold '>BOOK YOUR EXPERIENCE</button>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
