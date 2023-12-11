import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./style.css"
import Nav from '../components/Nav';

const Home: React.FC = () => (
  <div className='page-title'>
    لوحه التحكم &copy;
  </div>
);

const Actions: React.FC = () => (
  <div className='page-title'>
    لوحه التحكم صفحه 2 &reg;
  </div>
);
const CpanelRoutes: React.FC = () => {
  // throw new Error('Intentional error thrown');
  return (
    <div className='cpanel'>
      <Nav />
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route  path="/home" element={<Home/>} />
        <Route path="/actions" element={<Actions/>} />
      </Routes>
    </div>
  );
};

export default CpanelRoutes;
