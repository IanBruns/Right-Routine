import React, { useState } from 'react';
import RoutinesApiService from '../../services/routines-api-service';

export default function AddRoutinesPage(props) {
    const [routine_name, setRoutine_name] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        RoutinesApiService.postNewRoutine(routine_name)
            .then(data => {
                props.addRoutine(data)
                setRoutine_name('');
                props.history.goBack();
            })
    }

    return (
        <div className='AddRoutinesPage'>
            <form className='add-routine-form' onSubmit={e => handleSubmit(e)}>
                <label htmlFor='routine_name'>Routine Name</label>
                <br />
                <input type='text' placeholder='Enter Exercise Name' name='routine_name'
                    value={routine_name} onChange={e => setRoutine_name(e.target.value)} />
                <br />
                <button className='myButton button-submit' type='submit'
                    disabled={
                        !(routine_name.length > 0)
                    }>
                    Submit
                </button>
                <br />
                <button className='myButton'
                    onClick={props.history.goBack}>
                    Back
                </button>
            </form>
        </div>
    )
}