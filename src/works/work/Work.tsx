import React from 'react';
import s from './Work.module.scss';

type WorkPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
    demo: string
    sourceCode: string
}

function Work(props: WorkPropsType) {

    return (
        <div className={s.work}>
            <div className={s.workPreview} style={props.style}>
                <a className={s.workPreviewButton} href="#">Look</a>
            </div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
            <div className={s.workButtons}>
                <a className={s.workButtonsDemo} href={props.demo}>DEMO</a>
                <a className={s.workButtonsSourseCode} href={props.sourceCode}>SOURCE CODE</a>
            </div>
        </div>
    );
}

export default Work;
