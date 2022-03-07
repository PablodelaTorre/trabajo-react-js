import React from 'react'

const Item = ({item}) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            <hr />
        </div>
    )
}

export default Item