import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="container">
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p>
                Get in touch with us for any queries or feedback.
            </p>
            <form className='contact-form'>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text"  name="name" id="name"  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email"  name="email" id="email"  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows="3" required></textarea>
                </div>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    </div>

  )
}

export default Contact
