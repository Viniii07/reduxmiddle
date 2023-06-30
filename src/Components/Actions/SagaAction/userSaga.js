import {call, put, takeLatest} from "redux-saga/effects"
import { ServerCallService } from "../../ServerCallService/ServerCallService"

function* user1(){
    const resp=yield call(
        ServerCallService.get,
        "https://jsonplaceholder.typicode.com/users"
    )
    yield put({
        type:"USERS",
        payload:resp.data
    })
}

function* users(){
    yield takeLatest("USER_1",user1)
}

export default users;