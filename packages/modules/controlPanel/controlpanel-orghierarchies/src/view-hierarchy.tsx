import  {FC} from 'react'
import { RightToolbar } from '../../../pages/internal-gate/partials/RightToolbar'
import { OrganizationalChartForView } from './components/OrganizationalChartForView'
import { ViewHierarchyToolbar } from './toolbar/ViewHierarchyToolbar'
import { Provider } from "react-redux";
import store from './app/features/store';

const  ViewHierararchy : FC = () => {


  return (
   <>
      <ViewHierarchyToolbar />
      <RightToolbar />
      <OrganizationalChartForView />
   </>
   
  )
}

export { ViewHierararchy }
