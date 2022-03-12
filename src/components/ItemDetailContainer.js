import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'




const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
        toast.info("cargando detalle")
        fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then((response)=>{
            return response.json()
        })
        .then((res)=>{
            console.log(res)
            toast.dismiss()
            setItem(res)
        })
        .catch(()=>{
            toast.error("Error al cargar el detalle")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    return (
        <div className='d-flex justify-content-center my-4'>
            <ItemDetail item={item}/>
        </div>
    )

}

export default ItemDetailContainer