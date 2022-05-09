import React from 'react';
import s from './HireMe.module.scss';
import Fade from 'react-reveal/Fade';

function HireMe() {
    return (
        <Fade bottom>
            <div className={s.hireMe}>
                <h2>Considering remote work</h2>
                <a href="#">
                    <div>To hire me</div>
                </a>
            </div>
        </Fade>
    );
}

export default HireMe;
