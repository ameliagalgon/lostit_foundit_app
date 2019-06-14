/*
import { put, all, takeEvery } from 'redux-saga/effects';
import * as userApi from '../../services/user';
import {
    SNAP, SaveAction, SnapAction
} from './actions';
import { doneActionFail, doneActionSuccess, initAction } from '../Actions/actionCreators';
import {saveImage} from "./actionCreators";

function* snapImage(action: SnapAction) {
    try {
        const photoData = await this.camera.takePictureAsync();
        yield put(saveImage(photoData));
    }
}

function* watchSnapPhoto() {
    yield takeEvery(SNAP, snapImage);
}

export default function* root() {
    yield all([
        watchSnapPhoto()
    ]);
}
*/