import React from 'react';
import BodyContainer from '../BodyContainer/BodyContainer';
import Spinner from '../Spinner/Spinner';

const OverLayLoader = () => {
  return (
    <div>
      <div className="h-screen w-full fixed z-10 bg-white opacity-20"></div>
      <div className="h-[calc(100%-150px)] w-full fixed z-10">
        <Spinner center />
      </div>
    </div>
  );
};

export default OverLayLoader;
