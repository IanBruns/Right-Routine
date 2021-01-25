import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

function Header(props) {
    function handleLogoutClick() {
        TokenService.clearAuthToken();
        props.whenLoggedOut();
    }

    function renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    function renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/register'>
                    Register
                </Link>
                <Link
                    to='/login'>
                    Log in
                </Link>
            </div>
        )
    }

    return (
        <nav className='Header'>
            <Link to='/'>
                <h1>Right Routine</h1>
            </Link>
            {TokenService.hasAuthToken()
                ? renderLogoutLink()
                : renderLoginLink()}
        </nav>
    )
}

export default Header;