import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationPage(props) {
    return (
        <div className='sign-up'>
            <h2>Sign Up</h2>
            <form className='sign-up-form'>
                <div className='form-options'>
                    <label htmlFor='user_name'>Username</label>
                    <br />
                    <input type='text' placeholder='enter Username' name='uname' required />
                </div>
                <div className='form-options'>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder="Enter Password" name="password" required />
                </div>
                <div className='form-options'>
                    <label htmlFor="pswconf">Confirm Password</label>
                    <br />
                    <input type="password" placeholder="Confirm Password" name="pswconf" required />
                </div>
                <br />
                <button type="submit" className='myButton'
                >Log in</button>
                <br />
                <p>
                    Already have an account?
                    <Link to={'/login'}>Sign in</Link>
                </p>
            </form>
        </div>
    )
}