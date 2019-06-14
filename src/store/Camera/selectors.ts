import { AppState } from "../types";
import { createSelector } from "reselect";
import { CameraState } from "./types";
import { initialState } from "./constants";

export const getCameraState = (state: AppState) => state.camera ? state.camera : initialState;

export const getLastPhoto = createSelector(
    getCameraState,
    (state: CameraState) => state.captures[0]
);