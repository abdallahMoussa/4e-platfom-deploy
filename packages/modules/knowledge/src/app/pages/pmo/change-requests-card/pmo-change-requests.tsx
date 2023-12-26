import { FC } from 'react'
import { PmoChangeRequestsToolbar } from './toolbar/PmoChangeRequestsToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import ChangeRequestsTable from './components/ChangeRequestsTable'
import ChangeRequestsSummary from './components/ChangeRequestsSummary'

const PmoChangeRequests: FC = () => {
  return (
    <>
      <PmoChangeRequestsToolbar />
      <ChangeRequestsSummary />
      <ChangeRequestsTable />
      <RightToolbar />
    </>
  )
}

export { PmoChangeRequests }
