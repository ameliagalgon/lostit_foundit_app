import { SNAP, SAVE } from "./actions";

export const saveImage = (photoData: any[]) => ({
    type: SAVE,
    photoData
});

export const snap = () => ({
    type: SNAP
});