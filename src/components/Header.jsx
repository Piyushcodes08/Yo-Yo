import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  const menuItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Contact', path: 'contact' },
  ];



  return (
    <section className='flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-6 border-[8px] border-[#a39664] sticky top-0 z-50'>
      <div id="logo">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">YO YO <span className="italic text-[#a69f7d]">Shop</span>
        </h1>
      </div >
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {menuItems.map(({ link, path }) => (
          <Link
            key={path}
            className='text-white uppercase font-semibold cursor-pointer rounded-lg p-3 hover:bg-[#a39664] hover:text-black'
            to={path}
            spy={true}
            offset={-110}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      {/* mobile menu start here */}

      <div className='flex justify-center items-center lg:hidden ' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-2xl cursor-pointer' /> : <FaBars className='text-white text-2xl cursor-pointer' />}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}>
       <ul className='flex flex-col justify-center items-center gap-2 w-full'>
  {menuItems.map(({ link, path }) => (
    <Link
      key={path}
      className='text-white uppercase font-semibold cursor-pointer rounded-lg p-3 hover:bg-[#a39664] hover:text-black w-full text-center'
      to={path}
      spy={true}
      offset={-110}
      smooth={true}
      onClick={closeMenu}   
    >
      {link}
    </Link>
  ))}
</ul>
      </div>
    </section>
  )
}

export default Header