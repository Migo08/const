import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export const SidebarItem = ({ to = '#', name}) => {

  return (
    <ListItem disablePadding>
      <Link to={ to }>
        <ListItemButton >
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
              <Typography>{ name }</Typography>                                  
            </Grid>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}
