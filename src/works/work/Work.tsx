import React from 'react';
import s from './Work.module.scss';

type WorkPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}

function Work(props: WorkPropsType) {

    return (
        <div className={s.work}>
            <div className={s.workPreview} style={props.style}>
                <a className={s.workPreviewButton} href="#">Look</a>
            </div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
}

export default Work;
