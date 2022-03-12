import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import products from '../database/products'
import ItemList from './ItemList'
import { toast } from 'react-toastify'


const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const [items,setItems] = useState([])
    

    useEffect(()=>{

        toast.info("Cargando productos...")
        const pedido = fetch('https://fakestoreapi.com/products')
        
        pedido.then((res)=>{
            return res.json()
        })
        .then((resultado)=>{
            toast.dismiss()
            setItems(resultado)
        })
        .catch(()=>{
            toast.error("Error al cargar los productos")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    return (
        <>
                <div className='fs-2 fw-bold d-flex justify-content-center itemListContainer my-4 '>{greeting}</div>
                <ItemCount stock={6} initial={1}/>
                <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer