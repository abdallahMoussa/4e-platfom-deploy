import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import { GeneralApprovalsDetails } from './components/general-approvals-details'
import { PmoGeneralApprovalDetailsToolbar } from './toolbar/PmoGeneralApprovalDetailsToolbar'

const PmoGeneralApprovalDetails: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PmoGeneralApprovalDetailsToolbar />
      <RightToolbar />
  <GeneralApprovalsDetails/>
    </>
  )
}

export { PmoGeneralApprovalDetails }