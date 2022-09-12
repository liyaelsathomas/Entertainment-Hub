import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{backgroundColor:'transparent',padding:'17px'}}>
        <Toolbar sx={{display:'flex',justifyContent:'center',fontSize:'2vw',fontFamily:'Montserrat'}}>
        Entertainment App
        </Toolbar>
       </AppBar>
  )
}

export default Header