import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='fs-2 fw-bold d-flex justify-content-center itemListContainer my-4 '>{greeting}</div>
    )
}

export default ItemListContainer