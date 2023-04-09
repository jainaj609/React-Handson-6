import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/NavLink.css'
const NavLink = () => {
    return (
        <div className='Links'>
            <div>
                <Link to='/' className='Link-Decoration'>Home</Link>
            </div>
            <div>
                <Link to='/students' className='Link-Decoration'>Students</Link>
            </div>
            <div>
                <Link to='/contact-us' className='Link-Decoration'>Contact US</Link>
            </div>
        </div>
    )
}

export default NavLink
