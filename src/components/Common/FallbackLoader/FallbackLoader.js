import React from 'react';
import BodyContainer from '../BodyContainer/BodyContainer';
import Spinner from '../Spinner/Spinner';

const FallbackLoader = () => {
  return (
    <BodyContainer>
      <div className="h-screen w-full">
        <div className="h-[calc(100%-300px)] w-full">
          <Spinner center />
        </div>
      </div>
    </BodyContainer>
  );
};

export default FallbackLoader;
