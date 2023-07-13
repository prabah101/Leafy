import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'

const About = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        {/* <Navbar /> */}
        <div class="about-section">
          <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div class="skills">
              <span>Prabah Prasad Kalita</span>
              <span>Pragyan Bhardwaj</span>
              <span>Kunal Dutta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About