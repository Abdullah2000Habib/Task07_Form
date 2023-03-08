import React, { Component } from 'react';
import "./style.css";
class Input extends Component {
    render() {
        const {placeholder , type , label ,id ,value ,handleChange ,isRequired} =this.props;
        return (
            <>
                <div className='inputWrapper'>
                    <label className='inputLabel' htmlFor={id}>{isRequired?label+'*':label}</label>
                    <input className='input' required={isRequired} id={id}  type={type} placeholder={placeholder} onChange={(e)=>handleChange(e)} value={value} />
                </div>
            </>
        );
    }
}

export default Input;
