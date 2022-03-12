import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    return (
        <article className='contenedor-detalle'>
            <img src={item.image} alt="..." className='imagen-detalle'/>
            <h1 className=''>{item.title}</h1>
            <p className='fs-4 text-success precio-detalle'>{item.price} $</p>
            <p className="fs-6 d-flex justify-content-center descripcion-detalle">{item.description}</p> 
            <div className="contador-stock"><ItemCount stock={6} initial={1}/></div>
        </article>
    )
}

export default ItemDetail