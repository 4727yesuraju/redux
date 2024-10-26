import React from 'react'
import Counter from './features/counter/Counter'
import { useSelector } from 'react-redux'

export default function App() {
  const state = useSelector(state=>state.counter);
  console.log(state);
  return (
    <div>
      <Counter />
    </div>
  )
}
