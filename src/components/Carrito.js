import React, {useContext} from 'react'
import { contexto } from '../context/CartContext'


const Carrito = () => {
    
    const resultado = useContext(contexto)
    console.log(resultado)
    
    return (
        <><div>carrito</div></>
    )
}      

export default Carrito