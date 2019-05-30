import { createSelector } from "reselect";
import { AppState } from "../types";
import { AuthState } from "./types";
import { initialState } from "./constants";

export const getAuthState = (state: AppState): AuthState => state.auth || initialState;

export const getUser = createSelector(
    getAuthState,
    (state: AuthState) => state.user
);