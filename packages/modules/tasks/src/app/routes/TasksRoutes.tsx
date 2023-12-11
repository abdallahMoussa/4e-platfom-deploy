import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./style.css"
import Nav from '../components/Nav';


const Home: React.FC = () => (
  <div className='page-title'>
    المهام &copy;
  </div>
);

const Actions: React.FC = () => (
  <div className='page-title'>
    تنفيذ المهام &reg;
  </div>
);
const TasksRoutes: React.FC = () => {
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

export default TasksRoutes;
