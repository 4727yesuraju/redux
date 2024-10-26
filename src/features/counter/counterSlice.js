import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {  //actions
        increment : state=>{
            state.count+=1
        },
        decrement : state=>{
            return {...state,count : state.count-1}
        },
        reset : state=>({count : 0}),
        incrementByAmount : (state,action)=>({count :state.count +  action.payload})
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;