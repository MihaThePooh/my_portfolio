import React from 'react';
import s from "./Works.module.scss";
import Work from "./work/Work";
import socialImg from "./../assets/img/SocialNetwork.jpg";
import todoImg from "./../assets/img/Todolist.jpg";
import {v1} from "uuid";


function Works() {
    const worksArray = [
        {
            key: v1(),
            title: "Social Network",
            style: { backgroundImage: `url(${socialImg})`},
            description: "Short description"
        },
        {
            key: v1(),
            title: "Todolist",
            style: { backgroundImage: `url(${todoImg})`},
            description: "Short description"
        },
    ];

    const worksArrayForRender = worksArray.map( (wk) => {
        return <Work title={wk.title} description={wk.description} style={wk.style}/>
    })

    return (
        <div className={s.works}>
            <h2>My works</h2>
            <div className={s.worksItem}>
                {worksArrayForRender}
            </div>
        </div>
    );
}

export default Works;
