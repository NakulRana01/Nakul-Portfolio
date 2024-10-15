import React from "react";
import "./ContactMe.css";
// import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
// import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div className="contact-details-card">
          <a href='mailto:nakulrana17008@gmail.com' className="icon">
            <img src="./assets/images/email-icon.svg" alt="nakulrana17008@gmail.com" />
          </a>
          <p>nakulrana17008@gmail.com</p>
        </div>
        <div className="contact-details-card">
          <a href='https://github.com/NakulRana01' className="icon">
            <img src="./assets/images/github-icon.svg" alt="https://github.com/NakulRana01" />
          </a>
          <p>NakulRana01</p>
        </div>
        <div className="contact-details-card">
          <a href='https://in.linkedin.com/in/nakul-rana-212845235/' className="icon">
            <img src="./assets/images/linkedinLogo.svg"  alt="https://in.linkedin.com/in/nakul-rana-212845235/" />
          </a>
          <p>Nakul Rana</p>
        </div>
        <div className="contact-details-card">
          <a href='tel:+91 6261227418' className="icon">
            <img src="./assets/images/phoneicon.svg" alt="+91 6261227418" />
          </a>
          <p>+91 6261227418</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
