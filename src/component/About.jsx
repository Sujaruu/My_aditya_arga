import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#F6F5F5] text-[#b0c2d1] px-4">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#1687A7]">About</p>
          </div>
          <div></div>
        </div>

        <div className="w-full max-w-[1000px] grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-[#557B83]">Hi, I'm Aditya, nice to meet you, Please take a look arround</p>
          </div>
          <div>
            <p className="text-[#557B83]">i am passsionate about building exelent software that improves the lives ofo those arround me, i specializing in software </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
