import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { KnowledgePostingRequestsToolbar } from './toolbar/KnowledgePostingRequestsToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import KnowledgePostingRequestsHome from './components/KnowledgePostingRequestsHome'
const KnowledgePostingRequests: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgePostingRequestsToolbar />
      <KnowledgePostingRequestsHome/>
      <RightToolbar />
    </>
  )
}

export { KnowledgePostingRequests }
