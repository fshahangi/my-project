import { createSlice } from "@reduxjs/toolkit";


const initialState ={value :0 }
export const NumberSlice=createSlice({
        name:'counter',
         initialState:initialState,
         reducers:{
            increment: state => {
                state.value += 1
              },
            addincrement:(state,action)=>{
               state.value += action.payload 
            }
         }
})

export const { increment ,addincrement } = NumberSlice.actions
export default NumberSlice.reducer