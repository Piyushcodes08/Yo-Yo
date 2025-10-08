import React, { useEffect } from 'react'
import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"
import client3 from "../assets/images/client3.png"
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const clients = [
    {
        img: client1,
        name: "Piyush Gond",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        img: client2,
        name: "Piyush Gond",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        img: client3,
        name: "Piyush Gond",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
]

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <section id='testimonial' className='w-full md:px-20 px-10 md:h-[165vh] h-fit  py-12 sm:py-20 flex flex-col justify-end items-center gap-6 bg-[#a69f7d]'>
            <h1 data-aos="zoom-in" className='text-white text-center text-6xl font-bold'>Real Stories, Real Style</h1>
            <p data-aos="zoom-in" className='text-center text-white'>
                Here’s what our happy clients have to say about their experience with Yo-Yo Hair Rap .
We take pride in creating styles that make our clients feel confident and refreshed. Real feedback from real people — because your satisfaction means everything to us.
            </p>

            <div id="clients" className='grid md:grid-cols-3 grid-cols-1 gap-6 justify-center items-center'>
                {
                    clients.map((item, index) => {
                        return (
                            <div data-aos="slide-up" data-aos-delay="200" id='main-box' key={index} className='w-full bg-white p-14 flex flex-col justify-between items-center gap-6 rounded-3xl'>
                                <div id='top' className="w-full flex justify-between items-center gap-8">
                                    <div className='flex justify-center items-center gap-4 relative'>
                                        <BiSolidQuoteAltLeft className='size-20 text-[#1caf7e] absolute left-0 opacity-20' />
                                        <h1 className='text-2xl text-black font-bold'>{item.name}</h1>
                                    </div>
                                    <img src={item.img} alt="client" className='w-[100px] transform hover:scale-110 transition duration-300 cursor-pointer' />
                                </div>

                                <div id='bottom' className='w-full'>
                                    <p className='text-end text-lg text-gray-600 font-medium'>{item.para}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonial
