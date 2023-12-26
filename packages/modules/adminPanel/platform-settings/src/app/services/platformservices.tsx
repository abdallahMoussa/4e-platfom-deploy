// import axios, {AxiosResponse} from 'axios'
// import {ResponseModel} from '../partials/response-model'
// import {ResponseStatus} from '../partials/response-status'
// import {AddPlatformMainSettingsModel} from '../model/add-platform-mainsettings'
// import {platformConsume, requests} from '../../apis'

// export const addPlatform = (body: AddPlatformMainSettingsModel): Promise<string> => {
//   return new Promise<string>(async (resolve, reject) => {
//     try {
//       const response = await platformConsume.postMainSettings(body)

//       if (response?.message === 'mainSettingsAddedSuccessfully' && response?.statusEnum === ResponseStatus.SavedSuccessfully) {
//         resolve(response?.message)
//       } else {
//         reject('Failed to add platform settings.')
//       }
//     } catch (err) {
//       reject('An error occurred. Please contact the system administrator.')
//     }
//   })
// }
