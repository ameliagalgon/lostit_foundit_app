import { Action } from "redux";

export const SNAP = 'store/camera/snap';
export const RESET = 'store/camera/reset';
export const SAVE = 'store/camera/snap';

export interface SaveAction extends Action {
    photoData: any;
}


export type SnapAction = Action;
export type ResetAction = Action;

export type CameraAction = SnapAction | SaveAction | ResetAction;