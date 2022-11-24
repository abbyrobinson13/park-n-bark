import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const SearchModal = (props) => {
    const [open, setOpen] = useState(true);
    const [park, setPark] = useState()
    const handleClose = () => setOpen(false);
    
    console.log('hi', park)
    
    useEffect(() => {
        setPark(props.parks)
    },[props.parks])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
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
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Country: {park.name}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Continent: {park.continent}
          </Typography>
          </Box>
      </Modal>
    </div>
  )
}

export default SearchModal