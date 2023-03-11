import React, { Component } from 'react';
import blueLogo from "../../assets/images/blue-logo.png";
import greyComa from "../../assets/images/grey-coma-icon.png";
import loginImg from "../../assets/images/register-image.png";
import "./style.css";
class GamersLogin extends Component {
    render() {
        return (
            <>
                <div className='gamersLoginWrapper'>
                    <div className='gamersLoginContainer'>
                        <img className='gamersLoginContainerImg' src={blueLogo} alt='logo'/>
                        <div className='gamersLoginDescriptionWrapper'>
                            <img className='gamersLoginDescriptionImg' src={greyComa} alt='img'/>
                            <p className='gamersLoginDescription'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
                        </div>
                        <div className='gamersLoginPerson'>
                            <span className='gamersLoginPersonName'>Hideo Kojima</span>
                            <img  className='gamersLoginPersonImg' src={loginImg} alt='img'/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default GamersLogin;
