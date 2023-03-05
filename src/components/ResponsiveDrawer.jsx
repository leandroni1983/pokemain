import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from 'react-router-dom';
import { CatchingPokemonRounded } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import { Link } from '@mui/material';
const drawerWidth = 240;

export default function ClippedDrawer() {
    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: 'primary.main' // Agregamos esta línea para cambiar el color del fondo 
        }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer

                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'primary.main' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>

                        <ListItem key={'Home'} disablePadding>
                            <Link component={RouterLink} to={'/'}>
                                <ListItemButton>
                                    <ListItemIcon >
                                        <CatchingPokemonRounded fontSize={'lg'} sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ color: 'white' }} primary={'Home'} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem key={'pokemons'} disablePadding>
                            <Link component={RouterLink} to={'/pokemons'} >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CatchingPokemonRounded fontSize={'lg'} sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ color: 'white' }} primary={'Pokemons'} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>

                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                <Toolbar />

                <Outlet />

            </Box>
        </Box>
    );
}
