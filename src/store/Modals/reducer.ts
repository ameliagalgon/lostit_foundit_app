import { ModalsState } from "./types";
import { initialState } from "./constants";
import { ModalsAction, OPEN, CLOSE } from "./actions";

export const modalsReducer = (state: ModalsState = initialState, action: ModalsAction) => {
    switch(action.type) {
        case OPEN:
            return {
                ...action
            };
        case CLOSE:
            return initialState;
        default:
            return state;
    }
};