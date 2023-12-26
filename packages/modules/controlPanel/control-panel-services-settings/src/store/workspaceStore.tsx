import { configureStore } from '@reduxjs/toolkit'
import SubsystemReducer from '../slices/workspaceSlice'
import addWorkSpaceSlice from '../slices/addWorkspaceSlice';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import subsytemSettingsSlice from '../slices/SubsytemSettingsSlice';
import orgHierarchySlice from '../slices/orgHierarchySlice';
import SubsystemDropdownListSlice from '../slices/getAllSubsystemSlice'
import NoteTypeIdSlice from '../slices/getLookUpsSlice'
import WorkSpaceComponentReducer from "../slices/workspaceAggregatorSlice";
import removesubsystemReducer from "../slices/removeSubsystemSlice";
import putWorkspaceActivationReducer from "../slices/putWorkspaceActivation";
import addWorkSpaceCardSlice from"../slices/addCardsystemsSlice"

export const store = configureStore({
  reducer:{
   subsystem:SubsystemReducer,
   addWorkspace:addWorkSpaceSlice,
   SubsytemSettingsAggregator:subsytemSettingsSlice,
   workspaceComponent: WorkSpaceComponentReducer,
   removesubsystem: removesubsystemReducer,
   orgHierarchy:orgHierarchySlice,
   subsystemDropdownList:SubsystemDropdownListSlice,
   NoteTypeId:NoteTypeIdSlice,
   putWorkspaceActivation :putWorkspaceActivationReducer,
   addWorkspaceCard:addWorkSpaceCardSlice

 },
})


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
