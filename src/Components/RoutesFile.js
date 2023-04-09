import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Students from './Students'
import Home from './Home'
import ContactUS from './ContactUS'
import NavLink from './NavLink'
import StudentUpdate from './StudentUpdate'
import StudentAdd from './StudentAdd'
const RoutesFile = () => {
    return (
        <div>
            <NavLink/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/students' element={<Students />} />
                <Route path='/contact-us' element={<ContactUS />} />
                <Route path='/students-desc/:name' element={<StudentUpdate />} />
                <Route path='/students-desc/' element={<StudentAdd />} />
            </Routes>
        </div>
    )
}

export default RoutesFile
