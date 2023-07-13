import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CardItem = (props) => {


  return (
    <div>


        <Card sx={{ 
            Width: 345,
            ':hover': {
                boxShadow: 20, // theme.shadows[20]
            },
        }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={props.crop}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.cropName}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        
          {/* <h1 className="home-heading"> Upload From Gallery</h1>
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
          <button className='category-btn'><img src={corn} className='crop-img' alt='potato-img'/><br/>Corn</button><br></br> */}


        
    </div>
    
  )
}

export default CardItem