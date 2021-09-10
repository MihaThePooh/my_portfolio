import React from 'react';
import s from './Header.module.scss';

function Header() {
    return (
        <div className={s.header}>
            <div className={s.nav}>
                <a href="#">Welcome</a>
                <a href="#">Skills</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}

export default Header;
