import React, { useState } from 'react';

export default function AddExercisePage(props) {
    const [exercise_name, setExercise_name] = useState('');
    const [exercise_description, setExercise_description] = useState('');
    const [assigned_exercise, setAssigned_exercise] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submit!');
    }

    const routineOptions = props.routines.map((mapRoutine, i) => {
        return <option key={i} value={mapRoutine.id}>{mapRoutine.routine_name}</option>
    })

    return (
        <div className='AddExercisePage'>

            <h2>Add an Exercise</h2>

            <form className='add-exercise-form' onSubmit={e => handleSubmit(e)}>

                <div className='form-options'>
                    <label htmlFor='exercise_name'>Exercise Name</label>
                    <br />
                    <input type='text' placeholder='Enter Exercise Name' name='exercise_name'
                        value={exercise_name} onChange={e => setExercise_name(e.target.value)} />
                </div>

                <div className='form-options'>
                    <label htmlFor='exercise_description'>Exercise Description</label>
                    <br />
                    <input type='text' placeholder='Enter description' name='exercise_description'
                        value={exercise_description} onChange={e => setExercise_description(e.target.value)} />
                </div>

                <div className='form-options'>
                    <label htmlFor='assigned_exercise'>What Category does this belong to?</label>
                    <br />
                    <select id='assigned_exercise' name='assgned_exercise'
                        onChange={e => setAssigned_exercise(e.target.value)}>
                        <option value=''>-----</option>
                        {routineOptions}
                    </select>
                </div>

                <button className='myButton' type='submit'
                    disabled={
                        !(exercise_name.length > 0) ||
                        !(assigned_exercise.length > 0)
                    }>
                    Submit
                </button>

            </form>
            <button className='myButton'>Back</button>
        </div>
    )
}