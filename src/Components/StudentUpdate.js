import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './CSS/StudentUpdate.css'
import { store } from './ContextAPI/Context'


const StudentUpdate = () => {
    const arr = useContext(store);
    const navigate = useNavigate();

    const data = useLocation().state;

    const obj = {
        name: data.item.name,
        age: data.item.age,
        course: data.item.course,
        batch: data.item.batch,
    }


    const handleChange = (e) => {
        obj[e.target.name] = e.target.value;
    }

    const handleUpdate = () => {
        arr.data[data.index] = obj;
        navigate('/students');
    }
    return (
        <>
            <div className='input-container'>
                <div className="floating-label-input">
                    <input type="text" id="id" name='name' required defaultValue={data.item.name} onChange={handleChange} />
                    <label htmlFor="id" >Name</label>
                </div>
                <div className="floating-label-input">
                    <input type={'number'} id="id" name='age' required defaultValue={data.item.age} onChange={handleChange} />
                    <label htmlFor="id" >Age</label>
                </div>
                <div className="floating-label-input">
                    <input type="text" id="id" name='course' required className='dbgcolor' defaultValue={data.item.course} onChange={handleChange} />
                    <label htmlFor="id" >Course</label>
                </div>
                <div className="floating-label-input">
                    <input type="text" id="id" name='batch' required className='dbgcolor' defaultValue={data.item.batch} onChange={handleChange} />
                    <label htmlFor="id" >Batch</label>
                </div>

            </div>
            <div className='button-container'>
                <button className='cancel-button' onClick={() => navigate('/students')}>Cancel</button>
                <button className='update-button' onClick={handleUpdate}>Update</button>
            </div>
        </>
    )
}

export default StudentUpdate
