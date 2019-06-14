import { CameraState } from "./types";
import { initialState } from "./constants";
import { CameraAction, SAVE, SaveAction } from "./actions";

export const cameraReducer = (state: CameraState = initialState, action: CameraAction) => {
    switch(action.type) {
        case SAVE:
            console.log(state);
            return {
                captures: [(<SaveAction> action).photoData, ...state.captures]
            };
        default:
            return state;
    }
};