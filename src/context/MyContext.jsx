import React, { createContext, useState } from 'react'

export const ProductsContext=createContext();

const MyContext = (props) => {
      const [products,setProducts]=useState([
        {id:1,name:"iphone10",price:2000},
        {id:2,name:"iphone11",price:2300},
        {id:3,name:"iphone12",price:4000},
      ])

  return (
    <ProductsContext.Provider value={[products,setProducts]}>
         {props.children}
    </ProductsContext.Provider>
  )
}

export default MyContext
