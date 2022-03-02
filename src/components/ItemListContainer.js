import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className='fs-2 fw-bold d-flex justify-content-center itemListContainer my-4 '>{greeting}</div>
            <ItemCount stock={6} initial={1}/>
        </>
    )
}

export default ItemListContainer