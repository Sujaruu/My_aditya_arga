import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInbox } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[88px] flex justify-between items-center px-4 bg-[#F6F5F5] text-[#557B83] z-50">
      <div></div>

      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link activeClass="active" to="home" smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="about" smooth={true} offset={-10} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" smooth={true} offset={-70} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="works" smooth={true} offset={-70} duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" smooth={true} offset={-70} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hummberger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#F6F5F5] flex flex-col justify-center items-center'}>
        <ul>
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} activeClass="active" to="home" smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} activeClass="active" to="about" smooth={true} offset={-70} duration={500}>
              About
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} offset={-70} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} activeClass="active" to="works" smooth={true} offset={-70} duration={500}>
              Works
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} offset={-70} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* social icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a href="https://www.linkedin.com/in/aditya-argadinata-17b819225/" target="_blank" className="flex justify-between items-center w-full text-stone-300">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="https://github.com/Sujaruu" target="_blank" className="flex justify-between items-center w-full text-stone-300">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-700">
            <a href="/" className="flex justify-between items-center w-full text-stone-300">
              Mail <FaInbox size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
