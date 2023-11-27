import React from 'react';

const ActionBtn = ({ onClick = () => {}, text = '', isTableBtn }) => (
  <button
    onClick={onClick}
    className={`bg-indigo-600 cursor-pointer text-white font-bold px-8 py-4 text-xl 
    transition-all duration-200 ease-in rounded-md hover:bg-indigo-400 ${
      isTableBtn ? 'text-xl py-3 px-6' : ''
    }`}>
    {text}
  </button>
);
export default ActionBtn;
