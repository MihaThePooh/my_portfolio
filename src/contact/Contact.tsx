import React from 'react';
import s from './Contact.module.scss';

function Contact() {
    return (
        <div className={s.contact}>
            <h2>Contact</h2>
            <form className={s.form}>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email"/>
                <input type="textarea" placeholder="message"/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Contact;
