import React from 'react';
import s from './Skill.module.scss';

type SkillPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}

function Skill(props: SkillPropsType) {
    console.log(props.style.backgroundImage)
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
}

export default Skill;

