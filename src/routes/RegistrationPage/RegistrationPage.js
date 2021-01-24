import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationPage(props) {
    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='sign-up'>

            <h2>Sign Up</h2>

            <form className='sign-up-form'>

                <div className='form-options'>
                    <label htmlFor='user_name'>Username</label>
                    <br />
                    <input type='text' placeholder='enter Username' name='user_name' required
                        value={user_name} onChange={e => setUser_name(e.target.value)} />
                </div>

                <div className='form-options'>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder="Enter Password" name="password" required
                        value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <button type="submit" className='myButton'
                    disabled={
                        !(user_name.length > 0) ||
                        !(password.length > 0)
                    }>
                    Register
                </button>

                <br />

                <p>
                    Already have an account?
                    <Link to={'/login'}>Sign in</Link>
                </p>

            </form>

        </div>
    )
}