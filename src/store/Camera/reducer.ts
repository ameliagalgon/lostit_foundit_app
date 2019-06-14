import { CameraState } from "./types";
import { initialState } from "./constants";
import { CameraAction, SNAP } from "./actions";

export const cameraReducer = (state: CameraState = initialState, action: CameraAction) => {
    switch(action.type) {
        case SNAP:
            return {
                captures: [action.photoData, ...state.captures]
            };
        default:
            return state;
    }
};