import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import backImg from "../../assets/images/arrow_back_icon.png";
import Button from '../Button/Button';
import Input from '../Input/Input';
import PasswordStrength from '../PasswordStrength/PasswordStrength';
import Separator from '../Separator/Separator';
import "./style.css";

const defaults = {
    name:'',
    email:'',
    password:'',
    repeatPassword:'',
    check:false,
    degree:'',
    title:'',
}
const degrees = {
    degOne:['one','Week'],
    degTwo:['two','Medium'],
    degThree:['three','Strong'],
    degFour:['four','Very Strong'],
}
class Register extends Component {

    schema  = yup.object().shape({
        name:yup.string().matches(/^[a-z]+$/).min(6).max(16).required(),
        email:yup.string().email().required(),
        password:yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
        repeatPassword:yup.string().oneOf([yup.ref('password'),null]),
        check:yup.boolean().oneOf([true], 'Field must be checked'),
    });

    state={
        name:'',
        email:'',
        password:'',
        repeatPassword:'',
        check:false,
        degree:'',
        title:'',
    }
    handleChange = (e)=>{
        
        const {id ,value,checked}=e.target;
                this.setState((prev)=>{
            return id === 'check'? {...prev ,[id]:checked} :{...prev ,[id]:value}
    })     
    
    if(id ==='password'){

        const strengthChecks = {
            length: 0,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false,
        };
        strengthChecks.length = value.length<=9?true:false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(value);
        strengthChecks.hasLowerCase = /[a-z]+/.test(value);
        strengthChecks.hasDigit = /[0-9]+/.test(value);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(value);
        
        if(strengthChecks.hasDigit && !strengthChecks.length && strengthChecks.hasUpperCase && strengthChecks.hasLowerCase && strengthChecks.hasSpecialChar){
        this.setState((prev)=>{
            return {...prev,degree:degrees.degFour[0],title:degrees.degFour[1]}
        })
        }else if(strengthChecks.hasDigit && !strengthChecks.length && strengthChecks.hasUpperCase && !strengthChecks.hasLowerCase && strengthChecks.hasSpecialChar){
        this.setState((prev)=>{
            return {...prev,degree:degrees.degThree[0],title:degrees.degThree[1]}
        })
        }else if(strengthChecks.hasDigit && !strengthChecks.length && (strengthChecks.hasUpperCase || strengthChecks.hasSpecialChar ) && !strengthChecks.hasLowerCase){
        this.setState((prev)=>{
            return {...prev,degree:degrees.degTwo[0],title:degrees.degTwo[1]}
        })
        }else if(strengthChecks.hasDigit && strengthChecks.length && !strengthChecks.hasUpperCase && !strengthChecks.hasLowerCase && !strengthChecks.hasSpecialChar){
            this.setState((prev)=>{
            return {...prev,degree:degrees.degOne[0],title:degrees.degOne[1]}
        })
        }else{
        this.setState((prev)=>{
            return {...prev,degree:'five',title:'If you need very strong password Enter EX 123456789A#z'}
        })
        }
        
    }
}
    handleSubmit =(e)=>{
        e.preventDefault();
        this.schema.validate({name:this.state.name,email:this.state.email,password:this.state.password,repeatPassword:this.state.repeatPassword,check:this.state.check},{abortEarly:false}).then(()=>{
            this.setState((prev)=>{
                return {...prev,...defaults}
            })
        }).catch((error)=>console.log(error.errors))
    }
    render() {
        return (
            <> 
                <div className='registerWrapper'>
                    <div className='registerBack'>
                        <Link to='/login' className='registerBackLink'>
                            <img className='registerBackIMg' src={backImg} alt=''/>
                            <span className='registerBackTitle'>Back</span>
                        </Link>
                    </div>
                    <div className='registerDetails'>
                        <h2 className='registerTitle'>Register Individual Account!</h2>
                        <span className='registerDescription'>For the purpose of gamers     regulation, your details are required.</span>
                    </div>
                    <Separator toggle={true}/>
                    <form onSubmit={this.handleSubmit} className='registerForm'>
                        
                        <div className='registerInputs'>
                            <Input placeholder='Enter Your Name' type='text' label='Name' id='name'  handleChange={this.handleChange} value={this.state.name} isRequired={true}/>
                            <Input placeholder='Enter email address' type='text' label='Email Address' id='email' handleChange={this.handleChange} value={this.state.email}   isRequired={true}/>
                            <Input placeholder='password' type='password' label='Create password' id='password'  handleChange={this.handleChange} value={this.state.password} isRequired={true}/>
                            <PasswordStrength title={this.state.title} degree={this.state.degree}/>
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
                        <Link to='/login'>
                            <Button type='button' title='login' toggle={true}/>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;
