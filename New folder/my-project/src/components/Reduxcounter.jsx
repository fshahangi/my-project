import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  increment,addincrement } from './NumberSlice'

const Reduxcounter = () => {
  const name=useRef(null)
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>

      enter number:<input type='number' ref={name} />
      <button onClick={() => dispatch(addincrement(parseInt(name.current.value)))}>Add</button>
    </div>
  )
}

export default Reduxcounter
