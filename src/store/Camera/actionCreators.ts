import {SNAP, SAVE, RESET} from "./actions";

export const saveImage = (photoData: any) => ({
    type: SAVE,
    photoData
});

export const resetCapture = () => ({
    type: RESET
});

export const snap = () => ({
    type: SNAP
});