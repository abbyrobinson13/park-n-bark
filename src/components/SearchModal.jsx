import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const SearchModal = (props) => {
    const [open, setOpen] = useState(true);
    const [park, setPark] = useState()
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    
    console.log('hi', park)

    
    useEffect(() => {
        setPark(props.parks)
        handleOpen()
    },[props.parks])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40vw',
        height: '20vw',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        'text-align': 'center',
        display: 'flex',
        'flex-direction': 'column',
        'background-color': 'hsl(89, 59%, 90%)'
      };

    if(!park){
        return null
    }
      return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{flex: 'auto', 'font-size': '4vmin'}}>
            Country: {park.name}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2,  flex: 'auto'}}>
            Continent: {park.continent}
          </Typography>
          <button onClick={handleClose}>
            Exit
            </button>
          </Box>
      </Modal>
    </div>
  )
}

export default SearchModal