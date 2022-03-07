import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => {
                return(
                    <div>
                        <Item key={item.id} item={item}/>
                    </div>
                )
                })
            }
        </>
    )
}

export default ItemList