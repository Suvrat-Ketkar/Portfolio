import React from 'react';
const MyButton = ({ label }) => {
  return (
    <button className="bg-[#8B5A2B] border-2 border-[#5A3820] text-lg cursor-pointer rounded-[10px] outline-none p-0 shadow-[0_6px_14px_rgba(0,0,0,0.5),inset_0_-6px_#5A3820] transition-all duration-150 ease-in-out active:shadow-[inset_0_4px_#4E3219]">
      <div className="p-[24px_40px] rounded-[8px] shadow-[inset_0_-8px_#5A3820,inset_0_4px_#A47148] transition-all duration-150 ease-in-out active:shadow-[inset_0_6px_#4E3219]">
        <span className=" text-[#F3E0C7] font-navbar block transform translate-y-[-4px] transition-all duration-150 ease-in-out active:translate-y-0">
          {label}
        </span>
      </div>
    </button>
  );
};

export default MyButton;




