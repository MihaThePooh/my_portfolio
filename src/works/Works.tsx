import React from 'react';
import s from "./Works.module.scss";
import Work from "./work/Work";
import socialImg from "./../assets/img/SocialNetwork.jpg";
import todoImg from "./../assets/img/Todolist.jpg";
import {v1} from "uuid";
import Fade from 'react-reveal/Fade';

function Works() {
    const worksArray = [
        {
            key: v1(),
            title: "Social Network",
            style: {backgroundImage: `url(${socialImg})`},
            description: "Short description",
            links: {
                demo: "###",
                sourceCode: "###"
            }
        },
        {
            key: v1(),
            title: "Todolist",
            style: {backgroundImage: `url(${todoImg})`},
            description: "Short description",
            links: {
                demo: "###",
                sourceCode: "###"
            }
        },
    ];

    const worksArrayForRender = worksArray.map((wk) => {
        return <Work title={wk.title} description={wk.description} style={wk.style} demo={wk.links.demo}
                     sourceCode={wk.links.sourceCode}/>
    })

    return (
        <Fade bottom>
            <div className={s.works} id={"works"}>
                <h2>My works</h2>
                <div className={s.worksItem}>
                    {worksArrayForRender}
                </div>
            </div>
        </Fade>
    );
}

export default Works;
