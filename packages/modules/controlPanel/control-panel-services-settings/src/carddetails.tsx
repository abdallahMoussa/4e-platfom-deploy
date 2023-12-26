import { FC } from "react";
import { useIntl } from "react-intl";
import { AdminPanelViewallcardsToolbarCardDetails } from "./toolbar/AdminPanelViewallcardsToolbarCardDetails";
import { RightToolbar } from "./partials/RightToolbar";
import { ViewAllcardsCardDetails } from "./components/CardDetails";

const AdminPanelViewallcardsCardDetails: FC = () => {
  const intl = useIntl();
  return (
    <>
      <AdminPanelViewallcardsToolbarCardDetails />
      <ViewAllcardsCardDetails />
      <RightToolbar />
    </>
  );
};

export { AdminPanelViewallcardsCardDetails };
