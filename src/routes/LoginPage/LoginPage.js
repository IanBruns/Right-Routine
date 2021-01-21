import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'

export default function LoginPage(props) {
    const [error, setError] = useState(null);

    function handleSubmitJwtAuth(e) {
        e.preventDefault();
        const { user_name, password } = e.target;
        console.log(user_name.value, password.value);
    }

    return (
        <div className='sign-in'>
            <h2>Sign in</h2>
            <form className='sign-in-form'
                onSubmit={(e) => handleSubmitJwtAuth(e)}
            >
                <div className='form-options'>
                    <label htmlFor='user_name'>Username</label>
                    <br />
                    <input type='text' placeholder='enter Username' name='user_name' required />
                </div>
                <div className='form-options'>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder="Enter Password" name="password" required />
                </div>
                <br />
                <button type="submit" className='myButton'>Log in</button>
                <br />
            </form>
            <p>
                Don't have an account?
                    <Link to='/register'>Sign up</Link>
            </p>
        </div>
    )
}