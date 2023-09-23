import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_p68sekv', 'template_2jwuwim', form.current, 'OxGlKqr1DpElxh55v')
            .then(() => {
                alert('Mesajınız başarılı şekilde gönderildi.');
            }, () => {
                alert('Mesaj gönderilemedi.');
            });
        setFullName('')
        setEmail('')
        setMessage('')
    }

    return (
        <main className="main">
            <section className="contact section" id="contact">
                <h3 className="section_subtitle">
                    <span>For job offers and your questions</span>
                </h3>

                <h2 className="section_title">
                    Contact Me
                </h2>

                <div className="contact_container container grid">
                    <form onSubmit={sendEmail} autoComplete="off" className="contact_form" id="contact-form" ref={form}>
                        <div className="contact_group">
                            <input type="text" name="user_name" required placeholder="Full Name" className="contact_input" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                            <input type="email" name="user_email" required placeholder="Email" className="contact_input" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <textarea name="message" required placeholder="Message" className="contact_input" onChange={(e) => setMessage(e.target.value)} value={message} />
                        <input type="submit" value="Send Message" className="button contact_button" />

                    </form>
                </div>
            </section>
        </main >

    )
}

export default Contact