import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { PmoEditRiskToolbar } from './toolbar/PmoEditRiskToolbar'
import { EditRisk } from './components/edit-risk'

const PmoEditRisk: FC = () => {
  return (
    <>
      <PmoEditRiskToolbar />
      <EditRisk/>
      <RightToolbar />
    </>
  )
}

export default PmoEditRisk