import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './CSS/Students.css'
import { store } from './ContextAPI/Context';


const Students = () => {

    const { data } = useContext(store);

// console.log(data);
    const navigate = useNavigate();
    return (
        <div className='Student'>
            <div className='Heading'>
                <h1>Students Details</h1>
                <button className='Add-button' onClick={() => navigate('/students-desc')}>Add new student</button>
            </div>
            <div className=''>
                <table className='content-table' cellPadding={19}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Course</td>
                            <td>Batch</td>
                            <td>Change</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((item, index) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.course}</td>
                                    <td>{item.batch}</td>
                                    <td><Link to={`/students-desc/${index}`} state={{item, index}}>Edit</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Students
