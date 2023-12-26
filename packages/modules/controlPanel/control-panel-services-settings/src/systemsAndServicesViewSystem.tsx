import { FC } from "react";
import { RightToolbar } from "./partials/RightToolbar";
import { GenericToolbar } from "./partials/GenericToolbar";
import { ViewSystem } from "./components/ViewSystem";

const SystemsAndServicesViewSystem: FC = () => {
  return (
    <>
       <GenericToolbar
        list={[
          { key: "Workspace", value: "/admin-panel-workspace" },
          { key: "Cards", value: "/systems-services-settings" },
          { key: "Viewsystem", value: "" },
        ]}
      />
      <ViewSystem />
      <RightToolbar />
    </>
  );
};

export { SystemsAndServicesViewSystem };
