import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import PmoReportsIndicatorsHome from './components/PmoReportsIndicatorsItemsStatus'
import PmoReportsIndicatorsItemsStatusToolbar from './toolbar/PmoReportsIndicatorsItemsStatusToolbar'
import { ReportsIndicatorsRightToolbar } from './partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar'

const PmoReportsIndicators: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PmoReportsIndicatorsItemsStatusToolbar />
      <PmoReportsIndicatorsHome />
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />
    </>
  )
}

export default PmoReportsIndicators 
