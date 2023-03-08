import React, { Component } from 'react';
import Gamers from '../../components/Gamers/Gamers';
import Register from '../../components/Register/Register';
import "./style.css";
class RegisterPage extends Component {
    handleChange =(e)=>{
        console.log(e.target.value);
    }
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
