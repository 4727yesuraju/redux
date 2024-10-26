import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div>
         <button onClick={()=>dispatch(increment())}>+</button>
         <button onClick={()=>dispatch(decrement())}>-</button>
         <button onClick={()=>dispatch(reset())}>reset</button>
         <button onClick={()=>dispatch(incrementByAmount(10))}>+10</button>

      </div>
    </div>
  )
}

export default Counter
