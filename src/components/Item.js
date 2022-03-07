import React from 'react'

const Item = ({item}) => {
    return (
        <>
            <div className='container my-4 h-25'>
                <div className='d-flex cl justify-content-center h-25'>
                    <div className="card d-flex justify-content-center">
                        <img src="" className="card-img-top" alt="..."/>
                        <div className="card-body d-flex justify-content-center">
                            <div className='row'>
                                <h1 className="card-title">{item.title}</h1>
                            </div>
                            <div className='row'>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <div className='row'>
                                <a href="#" className="btn btn-primary">{item.price}</a>
                            </div>
                        </div>
                    </div>    
                </div>                        
            </div>
        </>
    )
}

export default Item