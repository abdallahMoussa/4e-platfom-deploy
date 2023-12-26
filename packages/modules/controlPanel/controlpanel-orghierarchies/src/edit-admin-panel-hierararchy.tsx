import  {FC} from 'react'
import { EditAdminPanelHierararchyToolbar } from './toolbar/EditAdminPanelHierararchyToolbar'
import { RightToolbar } from './partials/RightToolbar'

const EditAdminPanelHierararchy: FC = () => {


  return (
    <>
      <EditAdminPanelHierararchyToolbar />
      <RightToolbar />
    </>
  )
}

export { EditAdminPanelHierararchy }
