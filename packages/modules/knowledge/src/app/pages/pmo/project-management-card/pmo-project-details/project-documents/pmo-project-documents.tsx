import { FC } from "react";
import { PmoProjectCard } from "../PmoProjectCard";
import { RightToolbar } from "../../../partials/RightToolbar";
import { ProjectDocuments } from "./components/project-documents";
import { PmoProjectDocumentsToolbar } from "./toolbar/PmoProjectDocumentsToolbar";


const PmoProjectDocuments: FC = () => {
  return (
    <>
      <div>
        <PmoProjectDocumentsToolbar/>
        <RightToolbar />
        <PmoProjectCard ActiveNav={"projectDocuments"} />
    <ProjectDocuments/>
       
      </div>
    </>
  );
};

export { PmoProjectDocuments };
