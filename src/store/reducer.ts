import { combineReducers } from "redux";

import { authReducer } from "./Auth/reducer";
import { modalsReducer } from "./Modals/reducer";

export default combineReducers({
    auth: authReducer,
    modals: modalsReducer,
});