import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeExpertsAddToolbar } from './toolbar/KnowledgeExpertsAddToolbar'
import { AddExpert } from './components/AddExpert'



const KnowledgeExpertsAddExpert: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeExpertsAddToolbar />
      <AddExpert />
      <RightToolbar />
    </>
  )
}

export { KnowledgeExpertsAddExpert }
