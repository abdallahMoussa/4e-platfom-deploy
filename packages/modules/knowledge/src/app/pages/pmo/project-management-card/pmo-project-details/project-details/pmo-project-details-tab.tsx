import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { PmoProjectDetailsTabToolbar } from "./toolbar/PmoProjectDetailsTabToolbar";
import { ProjectDetails } from "./components/project-details";



const PmoProjectDetailsTab: FC = () => {
  return (
    <>
      <div>
      <PmoProjectDetailsTabToolbar/>
        <RightToolbar />
        <PmoProjectCard ActiveNav={"projectDetails"} />
        <ProjectDetails/>
      </div>
    </>
  );
};

export { PmoProjectDetailsTab };
