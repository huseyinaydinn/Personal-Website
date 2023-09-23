import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import HomeBlob from "./HomeBlob";
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_content">
                        <div className="home_data">
                            <h3 className="home_subtitle">
                                Welcome,
                            </h3>

                            <h1 className="home_title">I'm Hüseyin</h1>

                            <h3 className="home_education">Front End Developer <br />/ Ui & Ux Designer</h3>

                            <p className="home_descripton">
                                I'm passionate about both coding and web
                                design, and I love creating responsive and user-friendly web
                                pages.
                            </p>

                            <Link to="/contact" className="button">
                                Contact Me
                            </Link>
                        </div>
                        <div className="home_social">
                            <a
                                href="mailto:hsynaydino@gmail.com"
                                target="_blank"
                                className="home_social-link"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineMail />
                            </a>

                            <a
                                href="https://wa.me/905442706121"
                                target="_blank"
                                className="home_social-link"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/hsynaydin11"
                                target="_blank"
                                className="home_social-link"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className="home_image">
                        <HomeBlob />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
