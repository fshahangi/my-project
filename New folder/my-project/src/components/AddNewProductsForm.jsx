import React, { useContext, useReducer, useRef } from 'react'
import { ProductsContext } from '../context/MyContext';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import MyError from './MyError'
import Header from './Header';
import ProductList from './ProductList';
import { useDispatch } from 'react-redux';
import {addproduct} from './ProductSlice'


// const reducer=(state,action)=>{
//    switch(action.type){
//      case "add":
//         action.payload["id"] = new Date();
//         return [
//           ...state,
//           action.payload,
//         ]
//         case "update":
//           return [
//             ...state,
//             action.payload,
//           ]  
//    }
// }

const AddNewProductsForm = () => {
 const dispatch=useDispatch();
    const initialValues={
        id:0,
        name:'',
        price:'',
      }
      
// Context API
    // const [products,setProducts]= useContext(ProductsContext);
    // const name=useRef("");
    // const price=useRef(0);

// useReducer
   //const [state,dispatch]= useReducer(reducer,[])


    const onSubmit=(values)=>{
      // Context API
        //  setProducts([...products,{values}])
        //  console.log(products)
         //sendRequest(result_data);

          // useReducer
         // dispatch ({type:"add",payload:values})
         dispatch(addproduct(values))

        } 

        const validationSchema=yup.object({
           id:yup.number().required("enter productsID"),
           name:yup.string().required("enter productsname"),
           price:yup.number().required("enter productsprice"),
        })
       const formReference = useRef();



  return (
    <div>
      {/* <Header data={state} /> */}
      <Header />
     <Formik 
        onSubmit={onSubmit}
        initialValues={initialValues} 
        validationSchema={validationSchema}
        innerRef={formReference}
        validateOnBlur={false}
        validateOnChange={false}
       >
       <Form >
            <div><lable htmlFor="id"> Products ID </lable>
            <Field 
                type='text'
                id='id' 
                name='id'
                /><ErrorMessage name="id" component={MyError}/>
            </div>
           <div><lable htmlFor="name"> Products Name </lable>
            <Field 
                type='text'
                id='name' 
                name='name'
                /><ErrorMessage name="name" component={MyError}/>
            </div>
            <div><lable htmlFor="price"> Products Price </lable>
            <Field 
                type='text'
                id='price' 
                name='price'
                /><ErrorMessage name="price" component={MyError}/>
            </div>
            <button type='submit'>ADD</button>

       </Form>
       </Formik>

        {/* useReducer */}
        
        
        <ProductList  />

    </div>
  )
}

export default AddNewProductsForm
