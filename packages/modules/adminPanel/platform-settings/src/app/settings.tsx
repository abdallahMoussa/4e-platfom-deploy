import React, {Fragment} from 'react'
import SettingsToolbar from './toolbar/SettingsToolbar'
import SettingsHome from './components/Settings'
import {Provider} from 'react-redux'
import store from './redux/store'
//import dotenv from 'dotenv'

function Settings() {
  //dotenv.config()
  return (
    <Fragment>
      <Provider store={store}>
        {/* <RightToolbar /> */}
        <SettingsToolbar />
        <SettingsHome />
      </Provider>
    </Fragment>
  )
}

export default Settings
