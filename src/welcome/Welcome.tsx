import React from 'react';
import s from './Welcome.module.scss';
import welcomePhotoImg from './../assets/img/welcomePhoto.jpg';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';

function Welcome() {
    const welcomePhoto = {
        backgroundImage: `url(${welcomePhotoImg})`
    };

    return (
        <div className={s.welcome} id={"welcome"}>
            <div className={s.welcomeText}>
                <Fade delay={500}><span>Hi there</span></Fade>
                <Fade delay={1000}><h1>I am<br/>Michael Perov</h1></Fade>
                <p><ReactTypingEffect text={"Frontend developer"} delay={1500} speed={70}/></p>
            </div>
            <Fade delay={1700}>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div style={welcomePhoto} className={s.welcomePhoto}></div>
                </Tilt>
            </Fade>
        </div>
    );
}

export default Welcome;
