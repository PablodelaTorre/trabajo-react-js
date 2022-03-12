import React from 'react'

const Item = ({item}) => {
    return (
        <>
            <div className="row mx-2 my-4">
                <div className="d-flex flex-column border justify-content-center">
                    
                    <h1 className="fs-4 my-1 d-flex justify-content-center">{item.title}</h1>
                    <img src={item.image} className="card-img-top d-flex justify-content-center" alt="..."/>
                    <p className="fs-6 d-flex justify-content-center">{item.description}</p>
                    <p className="fs-6 d-flex justify-content-center">{item.price} $</p>
                    <a href="#" className="btn btn-primary">Ver detalles del producto</a>
                    
                </div>
            </div>    
        </>
    )
}

export default Item