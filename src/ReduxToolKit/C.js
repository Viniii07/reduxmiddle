import React from 'react'
import { useSelector } from 'react-redux'
import { getLoc, getName } from './slice'

export const C = () => {
  const name=useSelector((state)=>state?.nameLoc?.name)
  const loc=useSelector((state)=>state?.nameLoc?.loc)
  const n=useSelector(getName)
  const l=useSelector(getLoc)
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:{loc}</h1>
      <h1>Name:{n}</h1>
      <h1>Loc:{l}</h1>
    </div>
  )
}
