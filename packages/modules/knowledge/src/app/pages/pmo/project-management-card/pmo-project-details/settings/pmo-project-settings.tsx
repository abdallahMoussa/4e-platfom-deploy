import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { SettingsToolbar } from "./toolbar/pmo-settings-toolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { ProjectSettings } from "./components/settings";


const PmoProjectSettings: FC = () => {
  return (
    <>
      <div>
        <SettingsToolbar />
        <PmoProjectCard ActiveNav={"settings"} />
        <RightToolbar />
        <ProjectSettings/>
      </div>
    </>
  );
};

export { PmoProjectSettings };