import { combineReducers } from "redux";

import { authReducer } from "./Auth/reducer";
import { modalsReducer } from "./Modals/reducer";
import { cameraReducer } from "./Camera/reducer";
import { itemsReducer } from "./Items/reducer";

export default combineReducers({
    auth: authReducer,
    modals: modalsReducer,
    camera: cameraReducer,
    items: itemsReducer,
});