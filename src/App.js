import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a ECOMERCE!!"/>
        <ItemDetailContainer/>
        <ToastContainer/>
    </BrowserRouter>
  )
}

export default App