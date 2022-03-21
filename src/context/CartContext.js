import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);   

    const addItem = (producto,cantidad) => {     
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...producto, cantidad};        

        if(yaExisteEnCarrito(producto.id)) {            
            let index = //findIndex del item al que necesitamos sumar la cantidad recibida
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
        let cantidadTotal = 0;
        //forEach -> por cada item incrementammos el total
        return cantidadTotal;
    }

    const calcPrecioTotal = () =>{
        // idem función anterior, pero por cada item acumulamos la cantidad x el precio      
        return;  
    }

    const valorDelContexto = {
        carrito: carrito,      
        addItem: addItem,
        calcCantidad: calcCantidad
        // agregar el resto de las funciones que vayan creando
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider