import { ItemsState } from "./types";
import { initialState, initialNewItem } from "./constants";
import {ItemsAction, UPDATE, UpdateCurrentAction, INIT_NEW, InitNewAction} from "./actions";

import { generateUUID } from "../../helpers/uuid";

export const itemsReducer = (state: ItemsState = initialState, action: ItemsAction) => {
    switch(action.type) {
        case INIT_NEW:
            return {
                newItem: {...initialNewItem, id: generateUUID(), user: (<InitNewAction> action).user}
            };
        case UPDATE:
            const currentItem = state.newItem ? state.newItem : {};
            return {
                newItem: {...currentItem, ...(<UpdateCurrentAction> action).params}
            };
        default:
            return state;
    }
};