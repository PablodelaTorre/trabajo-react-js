import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);   

    const addItem = (producto,cantidad) => {     
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...producto, cantidad};        

        if(yaExisteEnCarrito(producto.id)) {            
            let index = copiaCarrito.findIndex( item => item.id === producto.id)
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito)
        } 
        else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }        
    }

    const yaExisteEnCarrito = (id) => {
        carrito.some((item)=>{
            return item.id===id
        })
    }

    const borrarProdDelCarrito = (id) => {
        //filter
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const calcCantidad = () =>{
        let cantidad = 0;
        carrito.forEach(item => cantidad += item.cantidad)
        return cantidad;
    }

    const calcPrecioTotal = () =>{
        let precioTotal = 0
        carrito.forEach(item => precioTotal = item.cantidad * item.price )    
        return precioTotal;  
    }

    const valorDelContexto = {
        carrito: carrito,      
        addItem: addItem,
        calcCantidad: calcCantidad,
        calcPrecioTotal: calcPrecioTotal
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider