import React, { useEffect } from 'react'
import serviceimg from "../assets/images/servicimg.jpg"
import service1 from "../assets/images/ser1.png"
import service2 from "../assets/images/ser2.png"
import service3 from "../assets/images/ser3.png"
import service4 from "../assets/images/ser4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

     useEffect(() => {
            AOS.init({
                offset: 200,
                duration: 800,
                easing: 'ease-in-sine',
                delay: 100,
            });
        }, []);
  return (
    <section id='services' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-16 bg-gray-900'>
<div className="flex flex-col justify-center items-center gap-4">
<h1 className="text-6xl text-white font-bold text-center"> Salon Lookbook</h1>
<p data-aos="zoom-in" className='text-xl text-slate-200  text-center'>A collection of our favorite styles and professional services.</p>
</div>
<div className='w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6'>
<div id="img-box">
  <img data-aos="zoom-in" data-aos-delay="100" src={serviceimg} alt={serviceimg} />
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center'>
<div data-aos="zoom-out" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-6 py-10'>
<img src={service1} alt={service1} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
<h1 className='text-black text-[18px] font-bold'>Precision Haircut</h1>
</div>
<div data-aos="zoom-out" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-6 py-10'>
<img src={service2} alt={service2} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
<h1 className='text-black text-[18px] font-bold'>Beard & Grooming</h1>
</div>
<div data-aos="zoom-out" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-6 py-10'>
<img src={service3} alt={service3} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
<h1 className='text-black text-[18px] font-bold'> Styling & Finishing</h1>
</div>
<div data-aos="zoom-out" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-6 py-10'>
<img src={service4} alt={service4} className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
<h1 className='text-black text-[18px] font-bold'>Color & Highlights</h1>
</div>
</div>
</div>
    </section>
  )
}

export default Services