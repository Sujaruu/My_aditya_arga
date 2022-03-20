import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div id="home" className="bg-[#F6F5F5] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-full ">
        <p className="text-[#1687A7]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aditya Argadinata</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#276678]">I'm a FrontEnd Developer</h2>
        <p className="text-[#557B83] py-4 max-w-[700px]">I'm a FrontEnd Developer Specializing in create a web interface and usually make my own design , i'm currently focused on buildding a responsive web applications</p>
        <div>
          <button>
            <Link activeClass="active" to="works" smooth={true} offset={-70} duration={500} className="text-[#276678] group border-2 border-[#276678] px-6 py-3 my-2 flex items-center hover:bg-[#1687A7] hover:text-white">
              View Works
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
