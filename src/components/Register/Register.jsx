import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Separator from '../Separator/Separator';
import "./style.css";

const defaults = {
    email:'',
    password:'',
    repeatPassword:'',
    check:true,
}
class Register extends Component {
    state={
        email:'',
        password:'',
        repeatPassword:'',
        check:true,
    }
    handleChange = (e)=>{
        console.log(this.state)
        const {id ,value,checked}=e.target;
        this.setState((prev)=>{
            return id === 'check'? {...prev ,[id]:checked} :{...prev ,[id]:value}
    })}
    handleSubmit =(e)=>{
        e.preventDefault();
        this.setState((prev)=>{
            return {...prev,...defaults}
        })
    }
    render() {
        return (
            <> 
                <div className='registerWrapper'>
                    <div className='registerDetails'>
                        <h2 className='registerTitle'>Register Individual Account!</h2>
                        <span className='registerDescription'>For the purpose of gamers     regulation, your details are required.</span>
                    </div>
                    <Separator toggle={true}/>
                    <form onSubmit={this.handleSubmit} className='registerForm'>
                        
                        <div className='registerInputs'>
                            <Input placeholder='Enter email address' type='email' label='Email Address' id='email' handleChange={this.handleChange} value={this.state.email}   isRequired={true}/>
                            <Input placeholder='password' type='password' label='Create password' id='password'  handleChange={this.handleChange} value={this.state.password} isRequired={true}/>
                            <Input placeholder='Repeat password' type='password' label='Repeat password' id='repeatPassword'  handleChange={this.handleChange} value={this.state.repeatPassword} isRequired={true}/>
                        </div>
                        <div className='registerAgree'>
                            <input onChange={(e)=>{this.handleChange(e)}} type='checkbox' id='check' required defaultChecked={this.state.check}/>
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
