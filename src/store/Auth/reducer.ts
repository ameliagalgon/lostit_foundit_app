import { AuthState } from "./types";
import {
    SET_USER, SetUserAction
} from "./actions";
import { initialState } from "./constants";

export const authReducer = (state: AuthState = initialState, action: SetUserAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                isInitialized: true
            };
        default:
            return state;
    }
};