import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/StudentUpdate.css'
import { store } from './ContextAPI/Context';

const StudentAdd = () => {
    const navigate = useNavigate();
    const { data } = useContext(store);
    const obj = {
        name: '',
        age: '',
        course: '',
        batch: ''
    }
    const handleChange = (e) => {
        obj[e.target.name] = e.target.value
    }
    const handleSubmit = () => {
        data.push(obj);
        navigate('/students');
        // console.log(data);
    }
    return (
        <>
            <div className='input-container'>
                <div className="floating-label-input">
                    <input type="text" name='name' id="id" required onChange={handleChange} />
                    <label htmlFor="id" >Name</label>
                </div>
                <div className="floating-label-input">
                    <input type="text" name='age' id="id" required onChange={handleChange} />
                    <label htmlFor="id" >Age</label>
                </div>
                <div className="floating-label-input">
                    <input type="text" name='course' id="id" required className='dbgcolor' onChange={handleChange} />
                    <label htmlFor="id" >Course</label>
                </div>
                <div className="floating-label-input">
                    <input type="text" name='batch' id="id" required className='dbgcolor' onChange={handleChange} />
                    <label htmlFor="id" >Batch</label>
                </div>


            </div>
            <div className='button-container'>
                <button className='cancel-button' onClick={() => navigate('/students')}>Cancel</button>
                <button className='Submit-button' onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default StudentAdd
