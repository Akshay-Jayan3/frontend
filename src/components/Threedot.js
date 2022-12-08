import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'





const options = [
  'Edit',
  'Delete',
  
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const HandleDelete=(id)=>{
    axios.delete(`http://192.168.2.74/Employee/Delete/${id}` )

    .then(function (response) {
  
      console.log(response);
  
    })
  
    .catch(function (error) {
  
      console.log(error);
  
    });

  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  

  };
  const handleClose = (id) => {
    HandleDelete(id)
   
    
    
    
    
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       
          <MenuItem>{options[0]}
           
          </MenuItem>
          <MenuItem  onClick={()=>handleClose(props.id) }>{options[1]}
           
          </MenuItem>
          

      
      </Menu>
    </div>
  );
}