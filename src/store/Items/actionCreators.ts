import { INIT_NEW, UPDATE } from "./actions";
import User from "../Auth/models/user";

export const initNewItem = (user: User, itemType: string) => ({
    type: INIT_NEW,
    user, itemType
});

export const updateCurrent = (params: any) => ({
    type: UPDATE,
    params
});

