import React, { Component } from 'react';
import Gamers from '../../components/Gamers/Gamers';
import PasswordStrength from '../../components/PasswordStrength/PasswordStrength';
import Register from '../../components/Register/Register';
import "./style.css";
class RegisterPage extends Component {
    render() {
        return (
            <>
                <div className='registerPageWrapper'>
                    <Gamers/>
                    <Register/>
                    
                </div>
            </>
        );
    }
}

export default RegisterPage;
