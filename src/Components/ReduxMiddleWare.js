import axios from 'axios'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { postAction } from './Actions/postAction'
import thunkAction from './Actions/thunkAction'
import { ServerCallService } from './ServerCallService/ServerCallService'

const ReduxMiddleWare = ({t}) => {
    const dispatch=useDispatch()
    const handlePost=()=>{
        postAction(dispatch)
    }
    const handleComments=()=>{
      t()
    }
    const handleUsers=()=>{
       dispatch({
        type:"USER_1"
       })
    }
  return (
    <div>
        <button onClick={handlePost}>Get Post</button>
        <button onClick={handleComments}>Get Comments</button>
        <button onClick={handleUsers}>Get Users</button>
    </div>
  )
}

// const mdp=(d)=>{
//   return {
//     dis:d
//   }
// }
const mdp={
  t:thunkAction
}
export default connect(null,mdp)(ReduxMiddleWare);