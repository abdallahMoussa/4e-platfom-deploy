import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import PmoRiskDetailsToolbar from './toolbar/PmoRiskDetailsToolbar'
import RiskDetails from './components/riskDetails'

const PmoRiskDetails: FC = () => {
  return (
    <>
      <PmoRiskDetailsToolbar />
      <RiskDetails />
      <RightToolbar />
    </>
  )
}

export default PmoRiskDetails