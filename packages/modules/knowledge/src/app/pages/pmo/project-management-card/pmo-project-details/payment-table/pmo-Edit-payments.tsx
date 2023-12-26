import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditPaymentsToolbar } from "./toolbar/EditPaymentsToolbar";
import { EditPayments } from "./components/edit-payments";


const PmoProjectEditPayments: FC = () => {
  return (
    <>
      <div>
        <EditPaymentsToolbar/>
        <RightToolbar />
        <EditPayments/>
      </div>
    </>
  );
};

export { PmoProjectEditPayments };
