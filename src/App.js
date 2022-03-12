import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  return (
    
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a ECOMERCE!!"/>
      <ItemDetailContainer/>
      <ToastContainer/>
    </>
  )
}

export default App