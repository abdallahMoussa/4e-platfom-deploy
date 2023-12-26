import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";

import { PaymentsTable } from "./components/payments-table";
import { PaymentsDigram } from "./components/payments-diagram";
import { PaymentsToolbar } from "./toolbar/PaymentsToolbar";


const PmoProjectPaymentsTable: FC = () => {
  return (
    <>
      <div>
        <PaymentsToolbar/>
        <RightToolbar />
        <PmoProjectCard ActiveNav={"paymentTable"} />
        <PaymentsDigram/>
        <PaymentsTable/>
      </div>
    </>
  );
};

export { PmoProjectPaymentsTable };
