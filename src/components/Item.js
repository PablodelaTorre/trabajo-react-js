import React from 'react'

const Item = ({item}) => {
    return (
        <>
            <div className="d-flex justify-content-center my-4">
                <div className="d-flex flex-column border justify-content-center">
                    
                    <h1 className="fs-4">{item.title}</h1>
                    <img src="" className="card-img-top d-flex justify-content-center" alt="..."/>
                    <p className="fs-6">{item.description}</p>
                    <p className="fs-6">{item.price} $</p>
                    <a href="#" className="btn btn-primary">Ver detalles del producto</a>
                    
                </div>
            </div>    
        </>
    )
}

export default Item