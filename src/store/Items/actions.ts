import { Action } from "redux";
import User from "../Auth/models/user";

export const INIT_NEW = "store/items/init";
export const UPDATE = "store/items/update";

export interface InitNewAction extends Action {
    user: User;
    itemType: string;
}

export interface UpdateCurrentAction extends Action{
    params: any;
}

export type ItemsAction = InitNewAction | UpdateCurrentAction;
