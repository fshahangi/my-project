import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    listproduct:[],
    product:{
        name:'',
        price:'',
        id:''
    }

 }
 
export const ProductSlice=createSlice({

        name:'allproducts',
         initialState:initialState,
         reducers:{
            addproduct:(state,action)=>{
                state.listproduct.push(action.payload)
              // state.value += action.payload 
            },
            updateproduct:(state,action)=>{
                const fil=state.listproduct.filter((item)=>{ item.id===id
                     //  return item===action.payload   
                })
                const {name,price}=fil[0];
                console.log(fil)
                //state.value += action.payload 
             },
             deleteproduct:(state,action)=>{
                const fil=state.listproduct.filter((item)=>{
                       return item===action.payload
                })
                console.log(fil)
               
             },
         }
})

export const { addproduct , updateproduct, deleteproduct } = ProductSlice.actions
export default ProductSlice.reducer