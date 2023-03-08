import React, { Component } from 'react';
import "./style.css";
class Button extends Component {
    render() {
        const {title , toggle=false ,type} =this.props;
        return (
            <>
                <button className={toggle?'btn white':'btn'} type={type}>{title}</button>
            </>
        );
    }
}

export default Button;
