import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { CreateNewServiceToolbar } from "./toolbar/CreateNewServiceToolbar";
import CreateNewServiceHome from './components/CreateNewService'
const CreateNewService: FC = () => {
  return (
    <>
      <RightToolbar />
      <CreateNewServiceToolbar/>
      <CreateNewServiceHome/>
    </>
  );
};

export { CreateNewService };
