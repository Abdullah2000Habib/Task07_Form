import React, { Component } from 'react';
import blueComa from "../../assets/images/blue-coma-icon.png";
import shapOne from "../../assets/images/shape1.png";
import whiteLogo from "../../assets/images/white_logo.png";
import "./style.css";
class Gamers extends Component {
    render() {
        return (
            <>
                <div className='GamerWrapper'>
                    <div className='GamerContainer'>
                        <img className='GamerContainerImg' src={whiteLogo} alt='logo'/>
                        <div className='GamerDescriptionWrapper'>
                            <img className='GamerDescriptionImg' src={blueComa} alt='img'/>
                            <p className='GamerDescription'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
                        </div>
                        <div className='GamerPerson'>
                            <span className='GamerPersonName'>Hideo Kojima</span>
                            <img  className='GamerPersonImg' src={shapOne} alt='img'/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Gamers;
