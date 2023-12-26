import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { EditServiceToolbar } from "./toolbar/EditServiceToolbar";
import EditServiceHome from "./components/EditService";
const EditService: FC = () => {
  return (
    <>
      <RightToolbar />
      <EditServiceToolbar />
      <EditServiceHome />
    </>
  );
};

export { EditService };
