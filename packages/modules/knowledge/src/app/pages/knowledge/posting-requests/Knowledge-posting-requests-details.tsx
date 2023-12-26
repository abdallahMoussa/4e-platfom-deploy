import React, { Fragment } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import KnowledgePostingRequestsDetailsToolbar from "./toolbar/KnowledgePostingRequestsDetailsToolbar";
import KnowledgePostingRequestsDetailsHome from './components/KnowledgePostingRequestsDetails'
function KnowledgePostingRequestsDetails() {
  return (
    <Fragment>
      <KnowledgePostingRequestsDetailsToolbar />
      <KnowledgePostingRequestsDetailsHome/>
      <RightToolbar />
    </Fragment>
  );
}

export default KnowledgePostingRequestsDetails;
