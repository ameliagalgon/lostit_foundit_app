import { AppState } from "../types";
import { createSelector } from "reselect";
import { ModalsState } from "./types";
import { initialState } from "./constants";

export const getModalsState = (state: AppState) => state.modals ? state.modals : initialState;

export const getModalName = (state: AppState, props: any) => props.hasOwnProperty('name') ? props.name : '';

export const isModalOpen = createSelector(
    getModalsState,
    getModalName,
    (state: ModalsState, name: string) => !!state.name && state.name === name
);

export const getModalParams = createSelector(
    getModalsState,
    (state: ModalsState) => state.params
);