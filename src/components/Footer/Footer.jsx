import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container container grid">
                <div>
                    <h1 className="footer_title">
                        Hüseyin <span>Aydın</span>
                    </h1>

                    <h2 className="footer_education">
                        Front-End Developer
                    </h2>
                </div>

                <div className="footer_social">
                    <a
                        href="mailto:hsynaydino@gmail.com"
                        target="_blank"
                        className="footer_social-link"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineMail />
                    </a>

                    <a
                        href="https://wa.me/905442706121"
                        target="_blank"
                        className="footer_social-link"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/hsynaydin11"
                        target="_blank"
                        className="footer_social-link"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <span className="footer_copy">
                    &#169; Copyright Hüseyin Aydın. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer