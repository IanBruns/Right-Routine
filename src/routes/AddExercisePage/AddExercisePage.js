import React from 'react';

export default function AddExercisePage(props) {
    const routineOptions = props.routines.map((mapRoutine, i) => {
        return <option key={i} value={mapRoutine.id}>{mapRoutine.routine_name}</option>
    })

    return (
        <div className='AddExercisePage'>
            <h2>Add an Exercise</h2>
            <form className='add-exercise-form'>
                <div className='form-options'>
                    <label htmlFor='exercise_name'>Exercise Name</label>
                    <br />
                    <input type='text' placeholder='Enter Exercise Name' name='exercise_name' required />
                </div>
                <div className='form-options'>
                    <label htmlFor='exercise_description'>Exercise Description</label>
                    <br />
                    <input type='text' placeholder='Enter description' name='exercise_description' required />
                </div>
                <div className='form-options'>
                    <label htmlFor='ecat'>What Category does this belong to?</label>
                    <br />
                    <select id='ecat' name='ecat'>
                        <option value=''>-----</option>
                        {routineOptions}
                    </select>
                </div>
                <button className='myButton' type='submit'>Submit</button>
            </form>
            <button className='myButton'>Back</button>
        </div>
    )
}