import User from './models/user';
import {
    GET_USER,
    SET_USER
} from './actions';

export const getUser = () => ({
    type: GET_USER
});

export const setUser = (user: any) => ({
    type: SET_USER,
    user
});