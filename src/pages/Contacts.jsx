import React from 'react';
import '../styles/Contact.css';

const Contacts = () => {
    return (
        <div className="body-container">
            <h1>GET IN TOUCH</h1>
            <p className="contact-icons"> 
                <a href="mailto:ayomidevictor349@gmail.com"><span className="mail-contact"><i className="far fa-envelope"></i></span></a>
                <span className="twitter-contact"><i className="fab fa-twitter"></i></span>
                <span className="pipe">|</span>   
                <a href="https://t.me/victor349" target="_blank" rel="noreferrer"><span className="telegram-contact"><i className="fab fa-telegram-plane"></i></span></a>
                <a href="https://www.instagram.com/sh_eg_un/" target="_blank" rel="noreferrer"><span className="insta-contact"><i className="fab fa-instagram"></i></span></a>
            </p>
        </div>
    );
}
 
export default Contacts;