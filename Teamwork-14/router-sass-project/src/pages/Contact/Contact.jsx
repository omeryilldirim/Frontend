import "./Contact.scss";
import {IoLocation,IoPhonePortrait,IoMail} from 'react-icons/io5'
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me...</h2>
      <div className="contact-list">
        <div className="contact-item">
          <p><IoPhonePortrait/> Email</p>
          <div className="contact-text">omeryilldirim@outlook.com</div>
        </div>
        <div className="contact-item">
          <p><IoMail/> Mobile</p>
          <div className="contact-text">+90 507 1680264</div>
        </div>
        <div className="contact-item">
          <p><IoLocation/> Address</p>
          <div className="contact-text">Istanbul 34775, Turkey</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
