// Contact.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-me">
        <div className="contact-section">
        <h2>CONTACT ME</h2>

        <div className="contact-info">
            <div className="contact-item">
            <FontAwesomeIcon icon={faHome} />
            <h3>ADDRESS</h3>
            <p>Mogadishu, Somalia</p>
            </div>
            <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <h3>PHONE NUMBER</h3>
            <p>+252 615 566 776</p>
            </div>
            <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>EMAIL</h3>
            <p>ibnuali600@gmail.com</p>
            </div>

        </div>
        </div>
    </section>
  );
};

export default Contact;
