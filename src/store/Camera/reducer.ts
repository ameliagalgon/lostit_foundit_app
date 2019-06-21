import { CameraState } from "./types";
import { initialState } from "./constants";
import {CameraAction, RESET, SAVE, SaveAction} from "./actions";

export const cameraReducer = (state: CameraState = initialState, action: CameraAction) => {
    switch(action.type) {
        case SAVE:
            console.log(state);
            return {
                capture: (<SaveAction> action).photoData
            };
        case RESET:
            return initialState;
        default:
            return state;
    }
};