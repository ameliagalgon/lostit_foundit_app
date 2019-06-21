import { INIT_NEW, UPDATE } from "./actions";
import User from "../Auth/models/user";

export const initNewItem = (user: User) => ({
    type: INIT_NEW,
    user
});

export const updateCurrent = (params: any) => ({
    type: UPDATE,
    params
});

