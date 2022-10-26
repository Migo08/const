import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/slices/auth";

export const Navbar = ({ drawerWidth = 240 }) => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage  } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const onLogout = (e) => {
        console.log('logout');
        e.preventDefault();
        
        dispatch(startLogout());
      }
  return (
    <AppBar
        position='fixed'
        sx={{  
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px`}
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between'>
                <Typography variant='h6' noWrap component='div'> Constructor 31 </Typography>

                <IconButton
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}