import React, { Component } from 'react';
import "./style.css";
class Input extends Component {
    render() {
        const {placeholder , type , label ,id ,value ,handleChange ,isRequired} =this.props;
        return (
            <>
                <div className='inputWrapper'>
                    <label className='inputLabel' htmlFor={id}>{isRequired?label+'*':label}</label>
                    <input className='input' required={isRequired}  type={type} placeholder={placeholder} value={value} onChange={(e)=>handleChange(e)}/>
                </div>
            </>
        );
    }
}

export default Input;
