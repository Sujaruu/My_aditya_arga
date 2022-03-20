import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-[#F6F5F5] text-[#557B83]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1687A7] text-[#b0c2d1]">Contact Me</p>
          <p className="py-6">// Leave me a massage here</p>
        </div>
        <div>
          <form action="" className="flex flex-col gap-2">
            <input type="text" placeholder="Name" className="w-full py-2 border-[1px] border-[#a6bec2] rounded-lg px-2" />
            <input type="email" placeholder="example@gmail.com" className="w-full py-2 border-[1px] border-[#a6bec2] rounded-lg px-2" />
            <textarea name="" id="" cols="30" rows="10" className="w-full border-[1px] border-[#a6bec2] rounded-lg p-2"></textarea>
            <button className="px-12 py-3 text-white bg-[#1687A7] mx-auto" style={{ width: 'fit-content' }}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
