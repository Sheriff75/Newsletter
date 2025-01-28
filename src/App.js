import { Box, Paper, Hidden, Container, Stack, Avatar, Typography, Button, TextField, Grid2, FormHelperText  } from "@mui/material"; // Use Grid, not Grid2
import mobileIcon from './assets/images/illustration-sign-up-mobile.svg'
import desktopIcon from './assets/images/illustration-sign-up-desktop.svg'
import redIcon from './assets/images/icon-list.svg'
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')

  const navigate = useNavigate();

 
  const handleSubmit = (e) => {
    e.preventDefault()

    if(email === ''){
      setError('Please enter your email address')
      return
    }
    else{
      setError('')
      
    if(emailError || error) {
      alert('Please fill in the form correctly')
    }
   
    if(!emailError && !error) {
      navigate('/success', {state: {email}})
    } 
  }
      
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
     
    const emailValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(!emailRegex.test(emailValue) && emailValue !== '')
    {
      setEmailError('Please enter a valid email address')     
      return
    }
    else{
      setEmailError('')
    }
    }
  return (
    <Box sx={{ backgroundColor: 'hsl(235, 18%, 26%)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper sx={{ width: '53%', height: '95%' }}>
        <Grid2 container columns={{xs: 6, sm: 6, md: 12 }} sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, width: '100%', padding: {xs: '0', md: '1rem'} }}> 
            <Grid2 size= {{xs: 6, md: 6}} sx={{ display: 'flex', }}>
              <Container sx={{ width: '100%' ,display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '0.5rem', marginTop: {xs: '1rem', md: '10rem'} }}>
                <Typography gutterBottom variant="h4" sx = {{color : 'hsl(234, 29%, 20%)', fontWeight: 'bold'}}>
                Stay updated!
                </Typography>
                <Typography flexWrap={true} variant="body2" sx = {{color : 'hsl(234, 29%, 20%)',}}>
                Join 60,000+ product managers receiving monthly updates on:
                </Typography>
                <Stack direction= 'row' spacing={2} sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{height: '16px', width: '16px'}} src={redIcon} />
                  <Typography variant="body2" sx = {{color : 'hsl(234, 29%, 20%)', }}>
                  Product discovery and building what matters
                  </Typography>
                </Stack>
                <Stack direction= 'row' spacing={2} sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{height: '16px', width: '16px'}} src={redIcon} />
                  <Typography variant="body2" sx = {{color : 'hsl(234, 29%, 20%)', }}>
                  Measuring to ensure updates are a success
                  
                  </Typography>
                </Stack>
                <Stack direction= 'row' spacing={2} sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{height: '16px', width: '16px'}} src={redIcon} />
                  <Typography variant="body2" sx = {{color : 'hsl(234, 29%, 20%)', }}>
                  And much more!
                  </Typography>
                </Stack>
                <Box sx={{width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
                <form style={{width: '100%'}} onSubmit={handleSubmit}>
                  <Typography variant="subtitle2">
                  Email address
                  </Typography>
                  <TextField value={email} onChange={handleEmailChange} size="small" fullWidth placeholder="Josh@example.com"  sx={{marginTop: '0.5rem', }}/>
                  <FormHelperText sx={{color: 'rgb(141, 7, 7)',  }}>
                    {error}
                  </FormHelperText>
                  <FormHelperText sx={{color: 'rgb(141, 7, 7)', }}>
                    {emailError}
                  </FormHelperText>
                </form>
              </Box>
              <Button onClick={handleSubmit} variant="contained" sx={{
                marginTop: '1rem', width: '100%', backgroundColor: 'hsl(234, 29%, 20%)',
                color: 'white', fontWeight: 'bold', textTransform: 'none', '&:hover': {backgroundColor: 'rgb(252, 84, 54)'}}}>
                Subscribe to monthly newsletter
              </Button>
              </Container>
             
            </Grid2>
            <Grid2 size= {{xs: 6, md: 6}} sx={{ display: 'flex',  }}>
              <Hidden mdUp>
              <img style={{objectFit: 'cover', width: '100%'}} src={mobileIcon} />
              </Hidden>
              <Hidden mdDown>
              <img src={desktopIcon} />
              </Hidden>
              
            </Grid2>
        </Grid2>
      </Paper>
    </Box>
    
  );
}

export default App;
