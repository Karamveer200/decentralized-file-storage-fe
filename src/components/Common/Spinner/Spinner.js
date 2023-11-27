import * as React from 'react';
import Box from '@mui/material/Box';
import classes from './Spinner.module.css';
import { Oval } from 'react-loader-spinner';

const Spinner = ({ center, className }) => {
  return (
    <Box sx={{ display: 'flex' }} className={`${center && classes.center} ${className}`}>
      <Oval
        height={65}
        width={65}
        color="#e3d5f1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4f46e5"
        strokeWidth={2}
        strokeWidthSecondary={5}
      />
    </Box>
  );
};

export default Spinner;
