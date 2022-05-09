import React from 'react';
import s from './Skills.module.scss';
import Skill from "./skill/Skill";
import htmlCssImg from "./../assets/img/htmlCss.png";
import jsImg from "./../assets/img/js.png";
import tsImg from "./../assets/img/ts.svg";
import reactImg from "./../assets/img/react.png";
import reduxImg from "./../assets/img/redux.png";
import tddImg from "./../assets/img/tdd.png";
import {v1} from "uuid";
import Fade from 'react-reveal/Fade';

const skillsArray = [
    {
        key: v1(),
        title: "HTML + CSS",
        style: {backgroundImage: `url(${htmlCssImg})`},
        description: "Short description"
    },
    {
        key: v1(),
        title: "JavaScript",
        style: {backgroundImage: `url(${jsImg})`},
        description: "Short description"
    },
    {
        key: v1(),
        title: "TypeScript",
        style: {backgroundImage: `url(${tsImg})`},
        description: "Short description"
    },
    {
        key: v1(),
        title: "React",
        style: {backgroundImage: `url(${reactImg})`},
        description: "Short description"
    },
    {
        key: v1(),
        title: "Redux",
        style: {backgroundImage: `url(${reduxImg})`},
        description: "Short description"
    },
    {
        key: v1(),
        title: "Test Driven Development",
        style: {backgroundImage: `url(${tddImg})`},
        description: "Short description"
    }
];

function Skills() {

    const skillsForRender = skillsArray.map(
        (sk) => <Skill key={sk.key} style={sk.style} title={sk.title} description={sk.description}/>
    );

    return (
        <Fade bottom>
            <div className={s.skills} id={"skills"}>
                <h2>My skills</h2>
                <div className={s.skillsItems}>{skillsForRender}</div>
            </div>
        </Fade>
    );
}

export default Skills;
