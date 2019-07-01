import { AuthState } from "./types";
import {
    SET_USER, SetUserAction
} from "./actions";
import { initialState } from "./constants";

const isEmpty = (obj: Object) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const authReducer = (state: AuthState = initialState, action: SetUserAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: isEmpty(action.user) ? {} :
                    {
                        id: action.user.uid,
                        email: action.user.email,
                        displayName: action.user.displayName
                    },
                isInitialized: true
            };
        default:
            return state;
    }
};