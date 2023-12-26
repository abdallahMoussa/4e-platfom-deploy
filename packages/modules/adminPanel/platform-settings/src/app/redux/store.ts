import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit'
import PlatformSlice from './platfromslice'
import EditPlatformMainSettings from './add-platformsettings-slice'
import AddPlatformSitesSlice from './add-platformsites-slice'
import PlatformSliceTab2 from './platformslicetab2'

const store = configureStore({
  reducer: {
    editPlatformMainSettings: EditPlatformMainSettings,
    fetchPlatform: PlatformSlice,
    addPlatformSites: AddPlatformSitesSlice,
    fetchSites: PlatformSliceTab2,
    addPlatformDepartment: PlatformSliceTab2,
    addPlatformIcon: PlatformSliceTab2,
    fetchPlatformSites: PlatformSlice,
    addSites: PlatformSlice,
    deleteSites: PlatformSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store
