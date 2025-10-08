import React, { useEffect } from 'react'
import gal1 from "../assets/images/gal1.jpg"
import gal2 from "../assets/images/gal2.jpg"
import gal3 from "../assets/images/gal3.jpg"
import gal4 from "../assets/images/gal4.jpg"
import gal5 from "../assets/images/gal5.jpg"
import gal6 from "../assets/images/gal6.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

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
     <section className='w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-gray-900 -mb-[200px]'>
        <h1 className='text-6xl text-white font-bold text-center capitalize'>exprience the best haircut & shaving services </h1>
    </section>
    <div className='w-full flex flex-col justify-center items-center'>
<div className='lg:w-[80%] w-full grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center items-center gap-10 md:-mb-[540px]'>
<img src={gal1} alt={gal1} data-aos="zoom-out" data-aos-delay="200" className='rounded-xl w-[400px] h-[350px]' />
<img src={gal2} alt={gal2} data-aos="zoom-out" data-aos-delay="200" className='rounded-xl w-[400px] h-[350px]' />
<img src={gal3} alt={gal3} data-aos="zoom-out" data-aos-delay="200" className='rounded-xl w-[400px] h-[350px]' />
<img src={gal4} alt={gal4} data-aos="zoom-out" data-aos-delay="200" className='rounded-xl w-[400px] h-[350px]' />
<img src={gal5} alt={gal5} data-aos="zoom-out" data-aos-delay="200" className='rounded-xl w-[400px] h-[350px]' />
<img src={gal6} alt={gal6} data-aos="zoom-out" data-aos-delay="200" className='rounded-xl w-[400px] h-[350px]' />
</div>
    </div>
    </>

  )
}

export default Gallery