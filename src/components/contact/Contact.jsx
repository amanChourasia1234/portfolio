import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1yoa4lh',
        'template_amqztdn',
        form.current,
        '5Ja4Y06i18aULpRsy'
      )
      .then(result => alert('Message sent'));
    e.target.reset();
  };

  return (
    <section id="contact" className="container">
      <h5>Get in Touch</h5>
      <h2>Contact ME</h2>
      <div className="contact-container">
        <div className="contact-card-items">
          <article className="contact-card-item">
            <AiOutlineMail className="card-item-icon" />
            <h3>Email</h3>
            <h5 className="text-light">amanchourasia2002@gmail.com</h5>
            <a href="sendto:amanchourasia2002@gmail.com" target="_blank">
              send a message
            </a>
          </article>
          <article className="contact-card-item">
            <BsInstagram className="card-item-icon" />
            <h3>Instagram</h3>
            <h5 className="text-light">aman__chourasia</h5>
            <a
              href="https://www.instagram.com/aman__chourasia_/"
              target="_blank"
            >
              send a message
            </a>
          </article>
          <article className="contact-card-item">
            <BsWhatsapp className="card-item-icon" />
            <h3>Whatsapp</h3>
            <h5 className="text-light">+91 8104441272</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8104441272"
              target="_blank"
            >
              send a message
            </a>
          </article>
        </div>
        <div className="contact-details">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input-name"
              name="name"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input-email"
              name="email"
            />
            <textarea
              placeholder="Your Message"
              rows="7"
              className="input-message"
              name="message"
            />
            <button href="" className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
