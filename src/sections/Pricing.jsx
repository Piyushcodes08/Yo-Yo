import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {

    useEffect(() => {
            AOS.init({
                offset: 200, 
                duration: 800,
                easing: 'ease-in-sine',
                delay: 100,
            });
        }, []);
  return (
    <section id='pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
<h1 data-aos="zoom-in" className='text-6xl font-bold text-black text-center'>Sharp Looks, Fair Prices</h1>
<div className='grid md:grid-cols-2 grid-cols-1 justify center items-center w-[85%] gap-20'>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Classic Haircut</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$20</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Beard Trim & Shape</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$20</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Hair Wash & Blow Dry</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$25</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Men’s Style Cut</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$45</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Women’s Styling</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$65</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Kids Haircut (Under 12)</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$18</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Hair Coloring</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$60</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
        <h1 className='text-3xl text-grey-900 font-bold'>Full Grooming Package</h1>
        <h1 className='text-4xl text-[#a69f7d] font-bold'>$75</h1>
    </div>
</div>
    </section>
  )
}

export default Pricing