import { OPEN, CLOSE } from "./actions";

export const openModal = (name: string, params: any) => ({
    type: OPEN,
    name, params
});

export const closeModal = () => ({
    type: CLOSE,
});