import React from 'react'
import Navbar from "../Navbar/Navbar";
import './Home.css'
import { useRef, useState } from 'react'

import potato from '../images/potato.jpg'
import bellPepper from "../images/pepper.jpg"
import tomato from "../images/tomato.jpg"
import apple from "../images/apple.jpg"
import grape from "../images/grape.jpg"
import corn from "../images/corn.jpg"



const Home = () => {

  const inputRef = useRef(null)
  const [image, setImage] = useState('')

  const handleImageClick = () => {
    inputRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setImage(file)

    const element = document.getElementById('img-upld-text')
    if(element){
      element.remove()
    }
    
  }


  return (
    <div className='home-wrapper'>
      <div className="home-container">
        <Navbar />
        <div className="home-main-content">
          <h1 className="home-heading"> Upload From Gallery</h1>
          <input type='file' className='file-selector' ref={inputRef} onChange={handleImageChange} required/><br/>

          <div className='uploaded-pic' onClick={handleImageClick}>
            {image ? <img src={URL.createObjectURL(image)} alt=''/> : <img src='' alt=''/>}
            <h5 id='img-upld-text'>Image Uploaded will be Displayed Here</h5>
          </div>
          
          <button className='category-btn'><img src={potato} className='crop-img' alt='potato-img'/><br/>Potato</button>
          <button className='category-btn'><img src={bellPepper} className='crop-img' alt='potato-img'/><br/>Bell-Pepper</button>
          <button className='category-btn'><img src={tomato} className='crop-img' alt='potato-img'/><br/>Tomato</button>
          <button className='category-btn'><img src={apple} className='crop-img' alt='potato-img'/><br/>Apple</button>
          <button className='category-btn'><img src={grape} className='crop-img' alt='potato-img'/><br/>Grape</button>
          <button className='category-btn'><img src={corn} className='crop-img' alt='potato-img'/><br/>Corn</button><br></br>


        </div>
      </div>
    </div>
  )
}

export default Home