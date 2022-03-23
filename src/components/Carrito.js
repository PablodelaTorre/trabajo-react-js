import React, {useContext} from 'react'
import { contexto } from '../context/CartContext'


const Carrito = () => {
    
    const {carrito,addItem} = useContext(contexto)
    
    return (
        <>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <p>{producto.price + "$"}</p>
                    <p>Total parcial: {producto.cantidad * producto.price + "$"}</p>
                </div>
            ))}
        </>
    )
}      

export default Carrito