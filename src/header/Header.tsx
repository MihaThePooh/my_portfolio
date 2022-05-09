import React from 'react';
import s from './Header.module.scss';
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";

function Header() {
    return (

            <div className={s.header}>
                <Fade top>
                <div className={s.nav}>
                    <Link
                        activeClass={s.active}
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >Welcome</Link>
                    <Link
                        activeClass={s.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >Skills</Link>
                    <Link
                        activeClass={s.active}
                        to="works"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >Works</Link>
                    <Link
                        activeClass={s.active}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >Contact</Link>
                </div>
                </Fade>
            </div>

    );
}

export default Header;
