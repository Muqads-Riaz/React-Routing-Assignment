import React from 'react'
import { Grid} from '@mui/material'
import Data from '../components/Data'
import {Card} from '@mui/material';
import {CardMedia }from '@mui/material';
import {Typography} from '@mui/material';
import{ Box }from '@mui/material'
import { NavLink } from 'react-router-dom'


export default function Gallery() {
  return (
    <div>
      <Typography className='heading' m={2} variant='h3'>Gallery Page</Typography>
      <Grid item  container spacing={3}>
        
        {Data.map((e)=>{
       return <Grid item md={4} lg={3} sm={6} xs = {12} ><Card sx={{ maxWidth: 345 }}>
       <CardMedia
         component="img"
         height="400"
         image={e.img}
         alt="image"
       />
     </Card> 
     </Grid>
      })
    } 
      </Grid>
      <Box className="special-box" > <NavLink className="special-link"  to="/">Go to home Page</NavLink></Box>
    </div>
  )
}
