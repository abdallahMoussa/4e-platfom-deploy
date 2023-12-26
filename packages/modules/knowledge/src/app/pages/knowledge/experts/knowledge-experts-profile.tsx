import React from "react";
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeExpertsProfileToolbar } from "./toolbar/KnowledgeExpertsProfileToolbar";
import { AdminExpertProfile } from "./components/AdminExpertProfile";


const KnowledgeExpertsProfile = () => {
    return(
    <>
        <KnowledgeExpertsProfileToolbar />
        <AdminExpertProfile />
        <RightToolbar />
    </>
    );
}

export { KnowledgeExpertsProfile }

