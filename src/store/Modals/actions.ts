import { Action } from "redux";

export const OPEN = 'store/modals/open';
export const CLOSE = 'store/modals/close';

export interface OpenAction extends Action {
    name: string;
    params: any;
}

export interface CloseAction extends Action {

}

export type ModalsAction = OpenAction | CloseAction;