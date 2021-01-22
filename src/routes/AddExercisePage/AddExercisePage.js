import React from 'react';

export default function AddExercisePage(props) {
    return (
        <div className='AddExercisePage'>
            <h2>Add an Exercise</h2>
            <form className='add-exercise-form'>
                <div className='form-options'>
                    <label htmlFor='ename'>Exercise Name</label>
                    <br />
                    <input type='text' placeholder='Enter Exercise Name' name='ename' required />
                </div>
                <div className='form-options'>
                    <label htmlFor='edesc'>Exercise Description</label>
                    <br />
                    <input type='text' placeholder='Enter description' name='edesc' required />
                </div>
                <div className='form-options'>
                    <label htmlFor='ecat'>What Category does this belong to?</label>
                    <br />
                    <select id='ecat' name='ecat'>
                        <option value=''>-----</option>
                        <option value='e1'>Example 1</option>
                        <option value='e2'>Example 2</option>
                        <option value='e3'>Example 3</option>
                    </select>
                </div>
                <button className='myButton' type='submit'>Submit</button>
            </form>
            <button className='myButton'>Back</button>
        </div>
    )
}