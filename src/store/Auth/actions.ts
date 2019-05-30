import { Action } from "redux";
import User from './models/user';

export const SET_USER = 'store/user/setUser'
export const GET_USER = 'store/user/getUser';

export type GetUserAction = Action;
export interface SetUserAction extends Action {
    user: User;
}

export type AuthAction = SetUserAction | GetUserAction;