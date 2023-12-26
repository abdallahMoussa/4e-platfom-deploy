import  {FC} from 'react'
import { AdminPanelHierararchyToolbar } from './toolbar/AdminPanelHierararchyToolbar'
import { RightToolbar } from './partials/RightToolbar'
import { OrganizationalChart } from './components/org-main-cards/organizational-chart'

const AdminPanelHierararchy: FC = () => {


  return (
    <>
      <AdminPanelHierararchyToolbar />
      <RightToolbar />
      <OrganizationalChart />
    </>
  )
}

export { AdminPanelHierararchy }
