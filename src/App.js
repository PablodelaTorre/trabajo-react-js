import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  
  return (
    
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a ECOMERCE!!"/>
      <ItemDetailContainer/>
    </>
  )
}

export default App