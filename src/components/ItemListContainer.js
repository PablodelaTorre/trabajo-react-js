import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const [items,setItems] = useState([])
    
    const {categoryId} = useParams()
    

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
    },[categoryId])

    if (loading){
        return <h1 className='text.success fs-2 fw-bold'>Cargando...</h1>
    }else{
        return (
            <>
                <div className='fs-2 fw-bold d-flex justify-content-center itemListContainer my-4 '>{greeting}</div>
                <ItemCount stock={6} initial={1}/>
                <ItemList items={items}/>
            </>
        )
    }
}
export default ItemListContainer