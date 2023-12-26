import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { KnowledgeExpertsToolbar } from './toolbar/KnowledgeExpertsToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import { AdminExpertCard } from './components/AdminExpertCard'


const KnowledgeExperts: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeExpertsToolbar />
      <AdminExpertCard />
      <RightToolbar />
    </>
  )
}

export { KnowledgeExperts }
