import React from 'react'
import { Typography } from '@mui/material'
import{ Box} from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function Services() {
  return (
    <div>
       <Typography className='heading' m={2} variant='h3'>Services Page</Typography>
       <div className='form'>
      <img src='http://innstylesalon.ca/wp-content/uploads/2019/08/Price-List-1024x788.jpg'></img>
    </div>
    <Box className="special-box" > <NavLink className="special-link"  to="/">Go to home Page</NavLink></Box>
    </div>
  
  )
}
