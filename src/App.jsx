import React from 'react'
import Header from './components/Header'
import Home from './sections/Home.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer'
import WhyChoose from './sections/WhyChoose.jsx'
import Pricing from './sections/Pricing.jsx'
import Services from './sections/Services.jsx'
import Gallery from './sections/Gallery.jsx'
import Testimonial from './sections/Testimonial.jsx'


const App = () => {
  return (
    <>
    {/* <Booking/> */}
    <Header/>
    <Home/>
    
    <WhyChoose/>
    <Pricing/>
    <Services/>
    <Gallery/>
    <Testimonial/>
     <Contact/>
    <Footer/>
    </>
  )
}

export default App