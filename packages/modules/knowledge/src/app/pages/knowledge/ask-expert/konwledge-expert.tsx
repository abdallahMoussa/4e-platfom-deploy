import React from "react";
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeExpertToolbar } from "./toolbar/KnowledgeExpertsToolbar";
import { ExpertCard } from "./components/ExpertCard";

const KonwledgeExpert = () => {
    const intl = useIntl()
  return (
    <>
      <KnowledgeExpertToolbar />
      <ExpertCard />
      <RightToolbar />
    </>
  )
}

export {KonwledgeExpert}