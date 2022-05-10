import React from 'react';
import s from './Footer.module.scss';
import vkLogo from '../assets/img/vk_logo.png'
import telegramLogo from '../assets/img/telegram_logo.png'
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <Fade>
            <div className={s.footer} id={"contact"}>
                <h2>Contacts</h2>
                <div className={s.footerSocial}>
                    <a href="https://vk.com/michael_perov"><img src={vkLogo}/></a>
                    <a href="https://t.me/SPB_Mihail_Perov"><img src={telegramLogo}/></a>
                </div>
                <span>2022 &#xa9; Все права защищены</span>
            </div>
        </Fade>
    );
}

export default Footer;