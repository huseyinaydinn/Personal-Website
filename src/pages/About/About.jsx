import React from 'react'
import AboutBlob from './AboutBlob'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <section className="about section" id="about">
                <div className="about_container container grid">
                    <div className="about_data">
                        <h3 className="section_subtitle">
                            Hüseyin Aydın
                        </h3>

                        <h2 className="section_title">
                            About
                        </h2>

                        <p className="about_description">
                            Hi, I am a highly skilled Front-End Developer located in Istanbul,
                            Turkey. I hold a Bachelor's degree in Web Design and Coding from
                            Anadolu University. My professional expertise lies at the
                            intersection of coding and web design, where I excel in crafting
                            dynamic, responsive, and user-centric web interfaces
                        </p>

                        <Link to="/contact" className="button">Contact Me</Link>
                    </div>

                    <div className="about_image">
                        <AboutBlob />
                    </div>
                </div>
            </section>

            <section>
                <div className="about_details container">
                    <h3 className="section_title">Front End Skills</h3>
                    <div className="skills-container">
                        <span>
                            <h4>Coding Skills</h4>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS / SCSS</li>
                                <li>JavaScript </li>
                                <li>React.js</li>
                                <li>Typescript</li>
                            </ul>
                        </span>

                        <span>
                            <h4>Frameworks and Libraries</h4>
                            <ul>
                                <li>Bootstrap 5</li>
                                <li>Material UI</li>
                                <li>Tailwind CSS</li>
                                <li>Bulma</li>
                                <li>Materialize</li>
                                <li>Ant Design</li>
                                <li>Chakra UI</li>
                            </ul>
                        </span>

                        <span>
                            <h4>Design Skills</h4>
                            <ul>
                                <li>Adobe Photoshop</li>
                                <li>Figma</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe After Effects</li>
                            </ul>
                        </span>

                        <span>
                            <h4>Other Skills</h4>
                            <ul>
                                <li>Git / GitHub</li>
                                <li>Can work with branches</li>
                                <li>Modular Css Usage</li>
                            </ul>
                        </span>
                    </div>





                </div>
                <div className="about_education container">
                    <h3 className="section_title">Education</h3>
                    <div className="eductaion-container">
                        <span>
                            <h4>WEB DESIGN & CODING</h4>
                            <p>ANADOLU UNIVERSITY</p>
                        </span>
                        <span>
                            <h4>CIVIL ENGINEER</h4>
                            <p>SELCUK UNIVERSITY</p>
                        </span>
                    </div>

                </div>
            </section>
        </div>



    )
}

export default About