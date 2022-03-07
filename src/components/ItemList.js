import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => {
                return(
                    <>
                        <div className='container-fluid'>
                            <div className='row d-flex'>
                                <div className='col-sm-3'>
                                    <Item key={item.id} item={item}/>
                                </div>
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