import React from 'react'
import { useLocation } from 'react-router-dom'
import {Box, Typography, Paper, Button, Avatar} from '@mui/material'
import successIcon from '../assets/images/icon-success.svg'
const Success = () => {
  const location = useLocation()
  const {email} = location.state

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'hsl(235, 18%, 26%)'}}>
        <Paper  sx={{width: '330px', height: '350px',borderRadius: '20px', padding: '3rem', display: 'flex', flexDirection: 'column', gap :'1.7rem'}}>
        <Avatar sx={{ }} src={successIcon} />
        <Typography variant='h4' sx={{color : 'hsl(234, 29%, 20%)', fontWeight: 'bold'}}>Thanks for subscribing!</Typography>
        <Typography>
        A confirmation email has been sent to {email}. 
        Please open it and click the button inside to confirm your subscription.
        </Typography>
        <Button variant='contained' onClick={() => window.location.href = location.state?.redirectUrl || '/'}
         sx={{marginTop: '1rem', width: '100%', backgroundColor: 'hsl(234, 29%, 20%)',
          color: 'white', fontWeight: 'bold', textTransform: 'none', '&:hover': {backgroundColor: 'rgb(252, 84, 54)'}}}>
          Confirm</Button>
        </Paper>
    </Box>
  )
}

export default Success