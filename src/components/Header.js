import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{backgroundColor:'#39445a',padding:'17px'}} >
        <Toolbar sx={{display:'flex',justifyContent:'center',fontSize:'5vw',fontWeight:'100',fontFamily:'Montserrat',textTransform:'uppercase'}}>
        Entertainment App
        </Toolbar>
       </AppBar>
  )
}

export default Header