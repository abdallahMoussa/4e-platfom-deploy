import { FC } from "react";
import { RightToolbar } from "./partials/RightToolbar";
import { AddSystem } from "./components/AddSystem";
import { GenericToolbar } from "./partials/GenericToolbar";

const SystemsAndServicesAddSystem: FC = () => {
  return (
    <>
       <GenericToolbar
        list={[
          { key: "Workspace", value: "/admin-panel-workspace" },
          { key: "Cards", value: "/systems-services-settings" },
          { key: "AddSystem", value: "" },
        ]}
      />
      <AddSystem />
      <RightToolbar />
    </>
  );
};

export { SystemsAndServicesAddSystem };
