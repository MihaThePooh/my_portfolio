import React from 'react';
import s from './Contact.module.scss';
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <Fade bottom>
            <div className={s.contact} id={"contact"}>
                <h2>Contact</h2>
                <form className={s.form}>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="email"/>
                    {/*<textarea placeholder="message" wrap={"on"}/>*/}
                    <textarea placeholder="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </Fade>
    );
}

export default Contact;
