import { ServerCallService } from "../ServerCallService/ServerCallService"

const thunkAction=()=>{
    return (dispatch,state)=>{
        ServerCallService.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            dispatch({
                type:"COMMENTS",
                payload:res.data
            })
        })
        .catch((failure)=>{
            console.log(failure)
        })
    }
}

export default thunkAction;