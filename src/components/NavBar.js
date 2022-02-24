import React from 'react'
import CarWidget from './CarWidget'
const NavBar = () => {
    return (
    <>
        
        <nav className='d-flex 100vw justify-content-between align-items-center bgNav'>
            <h1>Ecommerce</h1>
            <ul className='d-flex mx-4 align-items-center list-unstyled paddingNone marginNone'>
                <li className='mx-3'><a className='text-decoration-none text-light' href="">Home</a></li>
                <li className='mx-3'><a className='text-decoration-none text-light' href="">Productos</a></li>
                <li className='mx-3'><a className='text-decoration-none text-light' href="">Contacto</a></li>
                <li className='mx-3'><CarWidget/></li>
            </ul>
            
        </nav>
    </>
    )
}

export default NavBar