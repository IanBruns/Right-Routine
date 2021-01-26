import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

export default function RegistrationPage(props) {
    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        AuthApiService.postUser({ user_name, password })
            .then(() => {
                setUser_name('');
                setPassword('');

                const { location, history } = props;
                const destination = (location.state || {}).from || '/login';
                history.push(destination);
            })
            .catch(err => {
                alert(err.error);
            })
    }

    return (
        <div className='sign-up'>

            <h2>Register</h2>

            <form className='sign-up-form' onSubmit={e => handleSubmit(e)}>

                <div className='form-options'>
                    <label htmlFor='user_name'>Username</label>
                    <br />
                    <input type='text' placeholder='Enter Username' name='user_name' required
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