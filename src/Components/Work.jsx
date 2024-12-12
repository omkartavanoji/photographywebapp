import React from 'react';
import { Outlet } from 'react-router-dom';
import MasonryImageList from './MasonryImageList';

const Work = () => {
  return (
    <>

        <h1 id='work'>PORTFOLIO</h1>
        <MasonryImageList/>  
      <Outlet />
    </>
  );
};

export default Work;
