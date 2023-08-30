import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import MyContext from './context/MyContext'
import Header from './components/Header'
import ProductList from './components/ProductList'
import AddNewProductsForm from './components/AddNewProductsForm'
import Reduxcounter from './components/Reduxcounter'

function App() {
 

  return (
    <>
    
      {/* <Reduxcounter /> */}
      
    
      {/* <Register/> */}

      <AddNewProductsForm/>

     {/* Context API
      <MyContext>
        <Header/>
        <AddNewProductsForm/>
        <ProductList />
      </MyContext> */}
    </>
  )
}

export default App
