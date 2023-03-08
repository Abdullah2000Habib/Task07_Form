import React, { Component } from 'react';
import "./style.css";
class Separator extends Component {
    render() {
        const {toggle=true} =this.props;
        return (
            <>
                <div className='separatorWrapper'>
                    {toggle? '':<span className='separatorTitle'>OR</span>}
                </div>
            </>
        );
    }
}

export default Separator;
