import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeExpertsAddToolbar } from './toolbar/KnowledgeExpertsAddToolbar'
import { AddExpert } from './components/AddExpert'
import { KnowledgeExpertsEditToolbar } from './toolbar/KnowledgeExpertsEditToolbar'
import { EditExpert } from './components/EditExpert'



const KnowledgeExpertsEditExpert: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeExpertsEditToolbar /> 
      <EditExpert /> 
      <RightToolbar />
    </>
  )
}

export { KnowledgeExpertsEditExpert }
