// rootReducer.js
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import addUserJobInfoSlice from '../features/overview-slices/user-profile-add-job-info-slice'
import addUserExperienceSlice from '../features/overview-slices/user-profile-add-user-experience-slice'
import userBasicInfoSlice from '../features/overview-slices/user-profile-basic-info-slice'
import deleteUserExperienceSlice from '../features/overview-slices/user-profile-delete-user-experience-slice'
import editUserBasicInfoSlice from '../features/overview-slices/user-profile-edit-user-basic-info-slice'
import editUserExperienceSlice from '../features/overview-slices/user-profile-edit-user-experience-slice'
import userExperiencesSlice from '../features/overview-slices/user-profile-experience-info'
import userInfoJobsSlice from '../features/overview-slices/user-profile-information-jobs-slice'
import userViewSlice from '../features/overview-slices/user-profile-view-slice'
const store = configureStore({
  reducer: {
    addUserJobInfo:addUserJobInfoSlice,
    addUserExperience:addUserExperienceSlice,
    userBasicInfo:userBasicInfoSlice,
    deleteUserExperience:deleteUserExperienceSlice,
    editUserBasicInfo:editUserBasicInfoSlice,
    editUserExperience:editUserExperienceSlice,
    userExperiences:userExperiencesSlice,
    userInfoJobs:userInfoJobsSlice,
    userView:userViewSlice
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
