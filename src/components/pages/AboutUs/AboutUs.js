import React from 'react';
import './AboutUs.css';
import miya from '../../../assets/img/miya.jpg'

const AboutUs = () => {
  return (
   <div className="container">
    <div className="about-us-container">
        <div className="team-members">
            <h2>Our Team</h2>
            <div className="member-card">
                <img className="member-image" src={miya} alt="Miya Doe" />
                <h3 className='member-name'>Riya</h3>
                <p className='member-role'> Co-Founder</p>
            </div>
        </div>
        <div className="about-us-description">
            <h1 className='about-us-heading'>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos expedita quisquam beatae ea ratione dicta, fugiat cumque tempora laudantium omnis quo at quod deserunt ab, atque, vel illum earum!
            </p>
        </div>
    </div>
   </div>
  )
}

export default AboutUs