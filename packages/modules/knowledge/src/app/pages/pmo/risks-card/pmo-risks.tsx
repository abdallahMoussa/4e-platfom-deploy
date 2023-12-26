import {FC} from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { PmoRisksToolbar } from './toolbar/PmoRisksToolbar'
import RisksSummary from './components/RisksSummary'
import RisksTable from './components/RisksTable'

const PmoRisks: FC = () => {
  return (
    <>
      <PmoRisksToolbar />
      <RisksSummary />
      <RisksTable />
      <RightToolbar />
    </>
  )
}

export { PmoRisks }
