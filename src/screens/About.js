import React from 'react'
import { Typography ,Box} from '@mui/material'
import {NavLink} from 'react-router-dom'


export default function About() {
  return (
    <div>
      <Typography className='heading' m={5} variant='h3'>About Page</Typography>
       <Box m={8}> <Typography className='text'  variant='p'>Beauty salons have proven to be a recession-proof industry 
        across the United States. Although sales had declined from 2008 highs due to the Great
        Recession, they remain robust with a long-term positive forecast.Even though during 
        recessions, consumers tend to be more price-conscious, spending continues to increase. 
        With rising per capita incomes across the United States since 2015, beauty salons are booming
        with the industry generating $56.2 billion in the United States. Hair care is the largest 
        segment, with 86,000 locations. Skincare is expected to have revenue of almost $11 billion 
        by 2018. This growth is being driven in part by an increasing awareness of the importance of
        skin care among American women, but also specifically due to an increase in the market for 
        men. The market is distributed widely across America, with a concentration in the Northeast
        and Midwest. There is also a growing trend in boutique salons popping up and leveraging 
        online marketing to gain customers and compete with the franchise chains. The US Labor
        Department estimates employment in the United States increased 20% between 2008-2014, 
        with the greatest employment growth from skincare specialists. Beauty salons employ
        cosmetologists specializing in general beautification techniques. Cosmetology licensing
        requirements vary from state to state, and depending on which specific type of license 
         is desired; general cosmetologist, hair stylist, esthetician, manicurist, barber, electrologist, or other.</Typography></Box>
       <Box className="special-box" > <NavLink className="special-link"  to="/">Go to home Page</NavLink></Box>
    </div>
  )
}
