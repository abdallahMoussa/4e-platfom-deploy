import { FC } from "react";
import { RightToolbar } from "./partials/RightToolbar";
import { GenericToolbar } from "./partials/GenericToolbar";
import { EditSystem } from "./components/EditSystem";

const SystemsAndServicesEditSystem: FC = () => {
  return (
    <>
       <GenericToolbar
        list={[
          { key: "Workspace", value: "/admin-panel-workspace" },
          { key: "Cards", value: "/systems-services-settings" },
          { key: "EditSystem", value: "" },
        ]}
      />
      <EditSystem />
      <RightToolbar />
    </>
  );
};

export { SystemsAndServicesEditSystem };
