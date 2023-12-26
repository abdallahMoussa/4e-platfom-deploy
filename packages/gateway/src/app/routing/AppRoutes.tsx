/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, lazy, useEffect, useState} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage, useAuth} from '../modules/auth'
import { App } from '../App'
import { PrivateRoutes } from './PrivateRoutes'
// Templates Route
import { Home1Template } from '../modules/AllTemplates/Home1Template'
import { Home2Template } from '../modules/AllTemplates/Home2Template'
import { LoginTemplate } from '../modules/AllTemplates/LoginTemplate'
import { Home3Template } from '../modules/AllTemplates/Home3Template'
import { LoginTemplate3 } from '../modules/AllTemplates/LoginTemplate3'
import { useUser } from '../providers/user-provider'
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
 
  // const {currentUser} = useAuth()

  const [LoggedUser,setLoggedUser]=useState(false)
  // let LoggedUser= JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{ 
    if(localStorage.getItem("user") !==null)
    setLoggedUser(true);
    // console.log("LoggedUser",LoggedUser)
  } ,[LoggedUser])
  

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
         
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
        
         {LoggedUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />

              {/* Templates Route */}
              {/* <Route path='template1/*' element={<Home1Template />} />
              <Route path='template2/*' element={<Home2Template />} />
              <Route path='template3/*' element={<Home3Template />} />
              <Route path='templateslogin/*' element={<LoginTemplate />} />
              <Route path='template3login/*' element={<LoginTemplate3 />} /> */}
            </>
          ) : (
            <>
                <Route path='auth/*' element={<AuthPage />} />

                <Route path='*' element={<Navigate to='/auth' />} />
            </>
         )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
