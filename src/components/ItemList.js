import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => {
                return(
                    <>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Item key={item.id} item={item}/>
                            </div>
                        </div>
                    </>
                )
                })
            }
        </>
    )
}

export default ItemList