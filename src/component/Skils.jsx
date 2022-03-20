import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import kucing from '../assets/kucing.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skils = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#F6F5F5] text-[#557B83]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-[#b0c2d1] font-bold inline border-b-4 border-[#1687A7]">Skills</p>
          <p className="py-4">// These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={HTML} alt="HTML icons" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={CSS} alt="HTML icons" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={JavaScript} alt="HTML icons" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={ReactImg} alt="HTML icons" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Tailwind} alt="HTML icons" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={kucing} alt="HTML icons" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Mongo} alt="HTML icons" />
            <p className="my-4">MONGO</p>
          </div>
          <div className="shadow-md shadow-[#9fa2a7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Node} alt="HTML icons" />
            <p className="my-4">NODE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
