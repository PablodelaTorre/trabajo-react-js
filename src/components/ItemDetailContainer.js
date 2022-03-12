import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import products from '../database/products'


function getDatos(){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            const error = false

            if(error===false){
                resolve(products)
            }
            reject("Error obteniendo los datos")
        },2000)
    })
}    



const ItemDetailContainer = () => {

    const [item,setItem] = useState({})

    useEffect(()=>{
        getDatos().then(res => setItem(res)).catch(err => console.error(err))
    },[])

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer