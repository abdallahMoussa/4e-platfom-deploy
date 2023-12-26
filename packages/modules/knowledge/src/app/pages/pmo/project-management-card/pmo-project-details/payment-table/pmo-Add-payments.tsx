import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PaymentsDetails } from "./components/payments-details";
import { AddPaymentsToolbar } from "./toolbar/AddPaymentsToolbar";
import { AddPayments } from "./components/add-payments";


const PmoProjectAddPayments: FC = () => {
  return (
    <>
      <div>
        <AddPaymentsToolbar/>
        <RightToolbar />
        <AddPayments/>
      </div>
    </>
  );
};

export { PmoProjectAddPayments };
