import React from 'react';



const Header = () => {
  return (
    <div className="text-center mt-8">
      <section className="mt-8 text-center">
        <h1 className="text-6xl font-minecraft font-bold ">Hello, I'm Suvrat Ketkar!
        <img 
            src="/images/blue_torch.gif" 
            alt="Animated GIF" 
            className="inline-block ml-4" // This adds some space between the text and GIF
            style={{ maxWidth: '70px', maxHeight: '660px' }} // You can adjust the size as needed
          />
        </h1>
        <p className="bg-[#bd5019] inline-block px-6 py-3 rounded-lg mt-4 shadow-md text-white font-semibold cursor-pointer transform transition-all duration-150 hover:scale-105 active:scale-95 active:shadow-lg focus:outline-none">
          I'm a Web Developer based in India!
        </p>
        
        {/* <p className="bg-white border-2 border-gray-600 text-lg cursor-pointer rounded-[10px] outline-none p-0 shadow-[0_2px_10px_rgba(0,0,0,0.15),5px_14px_20px_rgba(0,0,0,0.15)] transition-all duration-100 ease-in-out active:shadow-none">
  <div className="p-[24px_40px] rounded-[8px] shadow-[inset_0_-6px_#d5d7de,0_-2px_white] transition-all duration-100 ease-in-out active:shadow-none">
    <span className="text-gray-600 block transform translate-y-[-4px] transition-all duration-100 ease-in-out active:translate-y-0">
      I'm a Web Developer based in India!
    </span>
  </div>
</p> */}

      </section>
    </div>
  );
};

export default Header;
