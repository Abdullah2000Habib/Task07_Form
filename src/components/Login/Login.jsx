import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import github from "../../assets/images/github.png";
import google from "../../assets/images/google.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import Button from '../Button/Button';
import Input from '../Input/Input';
import Separator from '../Separator/Separator';
import "./style.css";
const defaults = {
    email:'',
    password:'',
}
class Login extends Component {
    state={
        email:'',
        password:'',
    }
    handleChange = (e)=>{
        console.log(this.state)
        const {id ,value}=e.target;
        this.setState((prev)=>{
            return {...prev ,[id]:value}
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
                <div className='loginWrapper'>
                    <div className='loginDetails'>
                        <h2 className='loginTitle'>Join the game!</h2>
                        <span className='loginDescription'>Go inside the best gamers social network!</span>
                    </div>
                    <div className='loginSocial'>
                        <img src={google} alt=''/>
                        <img src={twitter} alt=''/>
                        <img src={linkedin} alt=''/>
                        <img src={github} alt=''/>
                    </div>
                    <Separator toggle={false}/>
                    <form onSubmit={this.handleSubmit} className='loginForm'>
                        <div className='loginInputs'>
                            <Input placeholder='Enter email address' type='email' label='Your email' id='email' handleChange={this.handleChange} value={this.state.email}   isRequired={false}/>
                            <Input placeholder='password' type='password' label='Enter your password' id='password'  handleChange={this.handleChange} value={this.state.password} isRequired={false}/>
                        </div>
                        <div className='submitBtn'>
                            <Button type='submit' title='login' toggle={false}/>
                        </div>
                    </form>
                    <div className='loginAgree'>
                        <label className='checkLabel' htmlFor='checkbox'>Dont have an account?</label>
                        <Link className='loginAgreeLink' to='/register'>Register</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
