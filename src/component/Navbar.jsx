import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInbox } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[88px] flex justify-between items-center px-4 bg-[#F6F5F5] text-[#557B83]">
      <div></div>

      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* hummberger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#F6F5F5] flex flex-col justify-center items-center'}>
        <ul>
          <li className="py-4 text-4xl">Home</li>
          <li className="py-4 text-4xl">About</li>
          <li className="py-4 text-4xl">Skills</li>
          <li className="py-4 text-4xl">Works</li>
          <li className="py-4 text-4xl">Contact</li>
        </ul>
      </div>

      {/* social icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a href="/" className="flex justify-between items-center w-full text-stone-300">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="/" className="flex justify-between items-center w-full text-stone-300">
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
