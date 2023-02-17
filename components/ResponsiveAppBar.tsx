import { useNextNavigator } from '@/hooks/useNextNavigator';
import { navBarContents } from '@/lib/NavBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion, AccordionDetails, AccordionSummary, Menu, MenuItem, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import Img from './Img';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




interface Props {
  window?: () => Window;
}

navBarContents;
const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { clickNavigate } = useNextNavigator()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navBarContents.map((item, i) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: '#fff'}}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" justifyContent={"space-between"} sx={{maxWidth: 1200, width: "100%"}} margin="auto" alignItems={'center'}>
            <Box
              width={190}
              height={72}
              position="relative"
            >
              <Img
                src="/assets/images/elfoavventure.png"
                alt="logo"
                fill
                sx={{ objectFit: "contain" }}
              />
            </Box>

            <Stack sx={{ display: { xs: 'none', md: 'block'}}}>
              {navBarContents.map((item, i) => (
                <Button 
                  key={item.name} 
                  color="info"
                  href={item.path}
                  onClick={clickNavigate(item.path)}  
                >
                  {item.name}
                </Button>
              ))}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-3"
                  id="panel1a-header"
                >
                  <Typography>Progetti</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button 
                  color="info"
                  href={navBarContents[1].path}
                  onClick={clickNavigate(navBarContents[2].path)}  
                >
                  {navBarContents[2].name}
                </Button>
                </AccordionDetails>
              </Accordion>
            </Stack>
            <Button
              color="primary" 
              variant="contained"
              endIcon={<FavoriteIcon/>}
              sx={{
                display: {xs: 'none', md: 'flex'}
              }}
            >
              Dona
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{

            // display: { xs: 'block',sm: 'block', md: 'block', lg: "none"},
            // backgroundColor: "green",
            
            // width: "1000 !important",
            //'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}