import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className="home-container">
        <Navbar />
        <div className="home-main-content">
          <div className="home-heading"></div>
          <div className="home-cardboard">
            <div className="home-card">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home