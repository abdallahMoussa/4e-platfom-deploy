import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { AddNewRisk } from './components/add-new-risk'
import { PmpAddNewRiskToolbar } from './toolbar/PmpAddRiskToolbar'

const PmoAddRisk: FC = () => {
  return (
    <>
      <PmpAddNewRiskToolbar />
      <AddNewRisk />
      <RightToolbar />
    </>
  )
}

export default PmoAddRisk