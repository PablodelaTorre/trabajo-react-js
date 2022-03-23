import React, {useContext} from 'react'
import { contexto } from '../context/CartContext'


const Carrito = () => {
    
    const {carrito, removeItem} = useContext(contexto)
    
    return (
        
            <div className='render-carrito'>
                {carrito.map(producto => (
                    <div key={producto.id} className="contenedor-carrito my-4">
                        <img src={producto.image} alt=""/>
                        <p className='d-flex justify-content-center titulo-carrito fw-bold'>{producto.title}</p>
                        <p className='d-flex justify-content-center precio-carrito fs-4 fw-bold'>{producto.price + "$"}</p>
                        <p className='d-flex justify-content-center cantidad-carrito fs-4 text-info'>Cantidad: {producto.quantity}</p>
                        <p className='d-flex justify-content-center text-success fs-3 total-parcial-carrito'>Total parcial: {producto.quantity * producto.price + "$"}</p>
                        <button onClick={() => removeItem(producto.id)} className='btn, btn-danger eliminar-producto-carrito'>Eliminar Producto</button>
                    </div>
                ))}
            </div>
            
    )
}      

export default Carrito