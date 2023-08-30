import React, { useContext } from 'react'
import { ProductsContext } from '../context/MyContext'
import ProductsCard from './ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct ,updateproduct, deleteproduct } from './ProductSlice'


const ProductList = () => {

  const products = useSelector(state => state.allproducts.listproduct)
  console.log(products)
  const dispatch = useDispatch()

  // Context API
   //const [products,setProducts]= useContext(ProductsContext);
  
  return (
    <div>
      {   
        // Context API
        // products.map((item)=>{
        //     return <ProductsCard name={item.name} price={item.price} />;
        // })
      }

      {// useReducer
       
          products.length>0 && 
          products.map((item)=>{ 
            return  <div>
              <p>{item.id} - {item.name} - {item.price}
              <button onClick={() =>  dispatch (updateproduct(item.id))}>Update</button>
              <button onClick={() =>  dispatch (deleteproduct(item.id))}>Delete</button></p>
              </div>         

          }) 
      }
    </div>
  )
}

export default ProductList
