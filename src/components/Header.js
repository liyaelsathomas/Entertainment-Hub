import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{backgroundColor:'#39445a',padding:'17px'}} >
        <Toolbar sx={{display:'flex',justifyContent:'center',fontSize:'5vw',fontWeight:'100',letterSpacing:'0.5rem',fontFamily:'Montserrat',textTransform:'uppercase'}}>
        Entertainment Hub
        </Toolbar>
       </AppBar>
  )
}

export default Header