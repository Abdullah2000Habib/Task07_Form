import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Separator from '../Separator/Separator';
import "./style.css";
class Register extends Component {
    render() {
        return (
            <> 
                <div className='registerWrapper'>
                    <div className='registerDetails'>
                        <h2 className='registerTitle'>Register Individual Account!</h2>
                        <span className='registerDescription'>For the purpose of gamers regulation, your details are required.</span>
                    </div>
                    <Separator toggle={true}/>
                    <form className='registerForm'>
                        {/* handleChange={} value={} */}
                        <div className='registerInputs'>
                            <Input placeholder='Enter email address' type='email' label='Email Address' id='email'  isRequired={true}/>
                            <Input placeholder='password' type='password' label='Create password' id='password'  isRequired={true}/>
                            <Input placeholder='Repeat password' type='password' label='Repeat password' id='repeatPassword'  isRequired={true}/>
                        </div>
                        <div className='registerAgree'>
                            <input type='checkbox' id='check' required/>
                            <label className='checkLabel' htmlFor='checkbox'>I agree to terms & conditions</label>
                        </div>
                        <div className='submitBtn'>
                            <Button type='submit' title='Register Account' toggle={false}/>
                        </div>
                        
                    </form>
                    <Separator toggle={false}/>
                    <div className='loginBtn'>
                        <Button type='button' title='login' toggle={true}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;
