// rootReducer.js
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import orgSlice from './orghierarchies-slice/orgSlice';
import orgManagerSlice from './orghierarchies-slice/org-manager-slice'
import orgCategorySlice from './orghierarchies-slice/org-categorySlice'
import addOrgSlice from './orghierarchies-slice/add-orgSlice'
import editOrgSlice from './orghierarchies-slice/edit-orgSlice';
const store = configureStore({
  reducer: {
    orghierarchies:orgSlice,
    orgManager:orgManagerSlice,
    orgCategories:orgCategorySlice,
    addOrg:addOrgSlice,
    editOrg:editOrgSlice
  },
}
);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector