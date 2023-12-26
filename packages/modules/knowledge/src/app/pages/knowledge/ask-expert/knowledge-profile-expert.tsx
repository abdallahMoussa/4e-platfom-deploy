import React from "react";
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeProfileExpertToolbar } from "./toolbar/KnowledgeProfileExpertToolbar";
import { ExpertProfile } from "./components/ExpertProfile";

const KnowledgeProfileExpert = () => {
    return(
    <>
        <KnowledgeProfileExpertToolbar />
        <ExpertProfile />
        <RightToolbar />
    </>
    );
}

export {KnowledgeProfileExpert}