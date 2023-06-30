import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setName } from './slice';

export const A = () => {
    const dispatch=useDispatch();
    const nameRef=useRef(null);
    const handleName=()=>{
        let name=nameRef.current.value;
        dispatch(setName(name))
    }
  return (
    <div>
        <input ref={nameRef}/>
        <button onClick={handleName}>Name:</button>
    </div>
  )
}
