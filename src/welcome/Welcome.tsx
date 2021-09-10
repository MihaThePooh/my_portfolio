import React from 'react';
import s from './Welcome.module.scss';
import welcomePhotoImg from './../assets/img/welcomePhoto.jpg'

function Welcome() {
    const welcomePhoto = {
        backgroundImage: `url(${welcomePhotoImg})`
    }

    return (
        <div className={s.welcome}>
            <div className={s.welcomeText}>
                <span>Hi there</span>
                <h1>I am<br/>Michael Perov</h1>
                <p>Front-end developer</p>
            </div>
            <div style={welcomePhoto} className={s.welcomePhoto}></div>
        </div>
    );
}

export default Welcome;
