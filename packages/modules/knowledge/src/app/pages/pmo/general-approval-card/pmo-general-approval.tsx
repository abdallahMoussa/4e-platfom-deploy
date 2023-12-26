import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { PmoGeneralApprovalToolbar } from './toolbar/PmoGeneralApprovalToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import { GeneralApprovalCards } from './components/general-approvals-cards'
import { GeneralApprovalsTable } from './components/general-approvals-table'

const PmoGeneralApproval: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PmoGeneralApprovalToolbar />
      <RightToolbar />
      <GeneralApprovalCards/>
      <GeneralApprovalsTable/>
    </>
  )
}

export { PmoGeneralApproval }
