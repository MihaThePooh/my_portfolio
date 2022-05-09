import React from 'react';
import s from "Button.module.css"

type ButtonPropsType = {
    text: string
}

const Button = (props: ButtonPropsType) => {
    return <a href="#" className={s.btn}>{props.text}</a>
};

export default Button