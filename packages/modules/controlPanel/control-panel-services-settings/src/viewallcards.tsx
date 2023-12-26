import { FC } from "react";
import { useIntl } from "react-intl";
import { AdminPanelViewallcardsToolbar } from "./toolbar/AdminPanelViewallcardsToolbar";
import { RightToolbar } from "./partials/RightToolbar";
import { ViewAllcardsTableCards } from "./components/TableCards";

const AdminPanelViewallcards: FC = () => {
  const intl = useIntl();
  return (
    <>
      <AdminPanelViewallcardsToolbar />
      {/* <GenericToolbar
        list={[
          { key: "Workspace", value: "/admin-panel-workspace" },
          { key: "Cards", value: "/control-panel-services-settings" },
          { key: "SystemSettings", value: "" },
        ]}
      /> */}
      <ViewAllcardsTableCards />
      <RightToolbar />
    </>
  );
};

export { AdminPanelViewallcards };
