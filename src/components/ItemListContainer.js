import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import products from '../database/products'
import ItemList from './ItemList'


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

const ItemListContainer = ({greeting}) => {
    
    const [items,setItems] = useState([])

    useEffect(()=>{
        getDatos().then(res => setItems(res)).catch(err => console.error(err))
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