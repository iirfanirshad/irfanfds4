import { AppBar, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <toolbar>
                <Button variant='contained' color='error'>
                    <Link to={'/loaddata'}>Load Data</Link>
                </Button>
                <Button variant='conatained' color='error'>
                <Link to={'/'}>Home</Link>
                </Button>
            </toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar