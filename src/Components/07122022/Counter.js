import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



const Counter = ()=> {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>     

        <span>{count}</span>
        
      </div>
    </div>
  )
}
export default Counter