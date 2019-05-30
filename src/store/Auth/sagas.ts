import { put, all, takeLatest } from 'redux-saga/effects';

import {
    GET_USER
} from "./actions";
import { setUser } from './actionCreators';

function getInfo() {
    console.log("Getting user");
}

function* getUser() {
    try {
        // yield put(initAction(action.type));

        const user = yield getInfo();
        yield put(setUser(user));

    } catch (errors) {
        console.log(errors);
    }
}

function* watchGetUser() {
    yield takeLatest(GET_USER, getUser);
}

export default function* root() {
    yield all([
        watchGetUser(),
    ]);
}