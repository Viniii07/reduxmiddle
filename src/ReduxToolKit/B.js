import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setLoc } from './slice';

export const B = () => {
  const dispatch=useDispatch();
  const locRef=useRef(null)
  const handleLoc=()=>{
   let loc=locRef.current.value;
   dispatch(setLoc(loc))
  }
  return (
    <div>
      <input ref={locRef}/>
      <button onClick={handleLoc}>Loc</button>
    </div>
  )
}
