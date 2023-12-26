import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminPanelViewallcardsCardDetails } from '../carddetails';
import { AdminPanelViewallcardsEditCard } from '../editcard';
import { SystemAndSerivcesSettings } from '../systemAndSerivcesSettings';
import { AdminPanelViewallcardsAddCard } from '../addcard';
import { SystemsAndServicesEditSystem } from '../systemsAndServicesEditSystem';
import { SystemsAndServicesAddSystem } from '../systemsAndServicesAddSystem';
import { SystemsAndServicesViewSystem } from '../systemsAndServicesViewSystem';
import { AdminPanelViewallcards } from '../viewallcards';


const CpanelRoutes: React.FC = () => {
  // throw new Error('Intentional error thrown');
  return (
    <div className='cpanel'>
      <Routes>

        <Route  path="/" element={<SystemAndSerivcesSettings/>} />
        <Route  path="/add-card" element={<AdminPanelViewallcardsAddCard/>} />
        <Route  path="/admin-panel-viewallcards/card-details/:id" element={<AdminPanelViewallcardsCardDetails/>} />
        <Route  path="/edit-card/:id" element={<AdminPanelViewallcardsEditCard/>} />
        <Route  path="/add-system" element={<SystemsAndServicesAddSystem/>} />
        <Route  path="/edit-system/:id" element={<SystemsAndServicesEditSystem/>} />
        <Route  path="/view-system/:id" element={<SystemsAndServicesViewSystem/>} />
        <Route  path="/admin-panel-viewallcards/:id" element={<AdminPanelViewallcards/>} />
      </Routes>
      
    </div>
  );
};

export default CpanelRoutes;
