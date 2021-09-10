import React from 'react';
import s from './Footer.module.scss';

function Footer() {
    return (
        <div className={s.footer}>
            Michael Perov
            <div className={s.footerSocial}>
                <a href="#">vk</a>
                <a href="#">linkedIn</a>
                <a href="#">telegram</a>
                <a href="#">inst</a>
            </div>
            <span>2021 &#xa9; Все права защищены</span>
        </div>
    );
}

export default Footer;