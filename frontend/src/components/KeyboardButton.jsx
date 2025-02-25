import React from 'react';

const KeyboardButton = ({ label }) => {
  return (
    <button
      className="kbc-button focus:outline-none bg-gray-200 text-gray-800 px-3 py-1.5 border border-gray-200 rounded-md text-base font-normal text-left inline-block cursor-pointer transition-all duration-300 ease-in-out shadow-[0_1px_0px_0px_rgba(217,217,217,1),0_2px_0px_0px_rgba(217,217,217,1),2px_2px_4px_0px_rgba(173,181,189,1),0_-1px_2px_0px_rgba(173,181,189,1)] hover:bg-gray-300 active:shadow-[0_0_1px_1px_rgba(179,179,179,1)]"
      style={{
        width: '84px',
        height: '38px',
        margin: '6px 6px 11px',
      }}
    >
      {label}
    </button>
  );
};

export default KeyboardButton;
