import { FC } from 'react';
import { RightToolbar } from "../partials/RightToolbar";
import { AddEscalationLevelToolbar } from './toolbar/AddEscalationLevelToolbar';
import AddEscalationLevelHome from './components/AddEscalationLevelHome';

const AddEscalationLevel: FC = () => {
  return (
    <>
      <AddEscalationLevelToolbar />
      <RightToolbar />
      <AddEscalationLevelHome />
    </>
  )
}

export  {AddEscalationLevel}