import React, { FC } from "react";
import { useIntl } from "react-intl";
import AddNewServiceRequestToolbar from "./toolbar/AddNewServiceRequestToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import AddNewServiceRequestHome from "./components/AddNewServiceRequest";
const AddNewServiceRequest: FC = () => {
  const intl = useIntl();
  return (
    <>
      <AddNewServiceRequestToolbar />
      <RightToolbar />
      <AddNewServiceRequestHome />
    </>
  );
};

export { AddNewServiceRequest };
