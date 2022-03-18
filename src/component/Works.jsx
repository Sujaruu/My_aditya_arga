import React from 'react';
import gambar1 from '../assets/gambar1.jpg';
import kucing from '../assets/kucing.png';

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#557B83] bg-[#F6F5F5]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#1687A7] text-[#b0c2d1]">Works</p>
          <p className="py-6">// Check out some of my works</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#e8eef3] relative w-[300px] h-[250px] rounded-md mx-auto shadow-md shadow-[#9fa2a7] hover:scale-105 duration-500 " style={{ overflow: 'hidden' }}>
            <div className="gambar1"></div>
            <img src={gambar1} alt="gambar-1" />
            <p className="text-lg py-1 text-center">Landing Page</p>
            <div className="">
              <img src={kucing} alt="" className="max-w-[30px] absolute bottom-3 right-3" />
            </div>
          </div>
          <div className="bg-[#e8eef3] relative w-[300px] h-[250px] rounded-md mx-auto shadow-md shadow-[#9fa2a7] hover:scale-105 duration-500 " style={{ overflow: 'hidden' }}>
            <div className="gambar1"></div>
            <img src={gambar1} alt="gambar-1" />
            <p className="text-lg py-1 text-center">Landing Page</p>
            <div className="">
              <img src={kucing} alt="" className="max-w-[30px] absolute bottom-3 right-3" />
            </div>
          </div>
          <div className="bg-[#e8eef3] relative w-[300px] h-[250px] rounded-md mx-auto shadow-md shadow-[#9fa2a7] hover:scale-105 duration-500 " style={{ overflow: 'hidden' }}>
            <div className="gambar1"></div>
            <img src={gambar1} alt="gambar-1" />
            <p className="text-lg py-1 text-center">Landing Page</p>
            <div className="">
              <img src={kucing} alt="" className="max-w-[30px] absolute bottom-3 right-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
