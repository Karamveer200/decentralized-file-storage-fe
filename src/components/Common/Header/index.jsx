import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>
    </>
  );
};

export default index;
