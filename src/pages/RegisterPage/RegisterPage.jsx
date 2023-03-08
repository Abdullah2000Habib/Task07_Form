import React, { Component } from 'react';
import Gamers from '../../components/Gamers/Gamers';
import Input from '../../components/Input/Input';
import "./style.css";
class RegisterPage extends Component {
    handleChange =(e)=>{
        console.log(e.target.value);
    }
    render() {
        return (
            <>
                <div>
                    <Gamers/>
                    <Input handleChange={this.handleChange}   type='email' isRequired={true} placeholder="Enter your Email" id="email" label="Email" />
                </div>
            </>
        );
    }
}

export default RegisterPage;
