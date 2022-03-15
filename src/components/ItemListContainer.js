import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const [items,setItems] = useState([])
    
    const {categoryId} = useParams()
    

    useEffect(()=>{

        toast.info("Cargando productos...")
        const url = `https://fakestoreapi.com/products/${categoryId ? "/category/"+categoryId : ""}`
        
        const pedido = fetch(url)
        
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
                <ItemList items={items}/>
            </>
        )
    }
}
export default ItemListContainer