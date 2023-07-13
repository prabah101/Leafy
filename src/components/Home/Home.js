import React from 'react'
import Navbar from "../Navbar/Navbar";
import './Home.css'
import { useRef, useState } from 'react'
import CardItem from '../Card/Card';
import Popup from '../Popup/Popup';

import potato from '../images/potato.jpg'
import bellPepper from "../images/pepper.jpg"
import tomato from "../images/tomato.jpg"
import apple from "../images/apple.jpg"
import grape from "../images/grape.jpg"
import corn from "../images/corn.jpg"

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(() => ({
  backgroundColor: '#E1E1E0',
  boxShadow: 'none',
  // padding: 8,
  width: 250,
  height: 225,
  textAlign: 'center',
  color: 'black',
}));


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
          <div className='cards'>
          <Box className="boxes">
            <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                  <Item><Popup cropName="potato" crop={potato}/></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><Popup cropName="corn" crop={corn}/></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><Popup cropName="tomato" crop={tomato}/></Item>
                </Grid>
              <Grid item xs={4}>
                <Item><Popup cropName="grape" crop={grape} /></Item>
              </Grid>
              <Grid item xs={4}>
                <Item><Popup cropName="bellPepper" crop={bellPepper}/></Item>
              </Grid>
              <Grid item xs={4}>
                <Item><Popup cropName="apple" crop={apple}/></Item>
              </Grid>
            </Grid>
          </Box>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Home