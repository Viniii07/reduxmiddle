import {all} from "redux-saga/effects";
import photos from "./photosSaga";
import users from "./userSaga";

function* rootSaga(){
    return yield all([users()])
}

export default rootSaga;