import React from 'react'

import './Popup.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import CardItem from '../Card/Card';

import UploadComp from '../Home/UploadComp';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: '#E1E1E0',
    border: '2px #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function Popup(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}><CardItem cropName={props.cropName} crop={props.crop}/></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='upload-comp'>
                <div className='upload-body'>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <UploadComp cropName={props.cropName}/>
                    </Typography>
                </div>
            </div>
            
          </Box>
        </Modal>
      </div>
    );
  }