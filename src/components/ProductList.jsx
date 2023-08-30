import React, { useContext } from 'react'
import { ProductsContext } from '../context/MyContext'
import ProductsCard from './ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { changeUpdate, deleteproduct } from './ProductSlice'


const ProductList = () => {

  const products = useSelector((state) => state.allproducts.listProduct)
  //console.log(products)
  const dispatch = useDispatch()


  const onUpdate = (item) => {
		dispatch(changeUpdate(item))
	}
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
          products.map((item,index)=>{ 
            return  <div key={index} >
              <p>{item.id} - {item.name} - {item.price}
              <button onClick={() => onUpdate(item)}>Update</button>
              <button onClick={() =>  dispatch (deleteproduct(item.id))}>Delete</button></p>
              </div>         

          }) 
      }
    </div>
  )
}

export default ProductList
