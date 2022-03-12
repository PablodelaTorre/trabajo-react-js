import React from 'react'
import { Link } from 'react-router-dom'
import CarWidget from './CarWidget'


const NavBar = () => {
    return (
    <>
        
        <nav className='d-flex 100vw justify-content-between align-items-center bgNav'>
            <Link to="/" className='text-decoration-none link-danger mx-1'><h1 className='fs-2'>Ecommerce</h1></Link>
            <ul className='d-flex mx-4 align-items-center list-unstyled paddingNone marginNone'>
                <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/ropa">Ropa</Link></li>
                <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/joyeria">Joyería</Link></li>
                <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/electronicos">Electrónicos</Link></li>
                <li className='mx-3'><Link to="/carrito" className='text-decoration-none link-danger'><CarWidget/></Link></li>
            </ul>
        </nav>
    </>
    )
}

export default NavBar