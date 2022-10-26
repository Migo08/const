import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({ drawerWidth }) => {

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth, flexShrink: { sm: 0 } }, minWidth: { sm: drawerWidth, flexShrink: { sm: 0 } } }}
    >
        <Drawer
            variant='permanent' //temporary if conditional
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, minWidth: drawerWidth  }
            }}
        >
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                >
                    Menú
                </Typography>                
            </Toolbar>
            <Divider />
                <List>
                    <SidebarItem to='dashboard' name='Dashboard' />
                    <SidebarItem to='reports' name='Reports' />
                    <SidebarItem to='routes' name='routes' />
                    <SidebarItem to='users' name='users' />
                    <SidebarItem to='vehicles' name='vehicles' />
                    <SidebarItem to='picking' name='picking' />
                </List>
        </Drawer>
    </Box>
  )
}
