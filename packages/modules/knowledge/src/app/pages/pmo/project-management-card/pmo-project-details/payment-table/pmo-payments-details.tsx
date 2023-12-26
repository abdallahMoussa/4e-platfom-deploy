import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PaymentsDetails } from "./components/payments-details";
import { PaymentsDetailsToolbar } from "./toolbar/PaymentsDetailsToolbar";


const PmoProjectPaymentsDetails: FC = () => {
  return (
    <>
      <div>
        <PaymentsDetailsToolbar/>
        <RightToolbar />
        <PaymentsDetails/>
      </div>
    </>
  );
};

export { PmoProjectPaymentsDetails };
