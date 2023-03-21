import { useNextNavigator } from '@/hooks/useNextNavigator';
import { navBarContents } from '@/lib/components/layout/appBar/NavBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { ClickAwayListener, MenuItem, MenuList, Paper, Grow, Popper, Stack } from '@mui/material';
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
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Img from '../../images/Img';
import { NextImg } from '../../other/NextImg';




interface Props {
  readonly window?: () => Window;
}

navBarContents;
const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { clickNavigate } = useNextNavigator()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    const isTabPressed = event.key === 'Tab'
    const isEscapePressed = event.key === 'Escape'
 
    if (isTabPressed) {
      event.preventDefault();
    } 

    if (isTabPressed || isEscapePressed) {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navBarContents.slice(0, 6).map((item, i) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={clickNavigate(item.path)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window?.().document.body

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: '#fff' }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                xs: 'block',
                md: 'none'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{
              maxWidth: 1200,
              width: "100%"
            }}
            margin="auto"
            alignItems={'center'}
          >
            <Box
              width={190}
              height={72}
              position="relative"
            >
              <NextImg
                src="/assets/images/elfoavventure.png"
                alt="logo"
                skeletonSx={{
                  borderRadius: 2
                }}
                fill
                onClick={clickNavigate("/")}
                sx={{
                  objectFit: "contain",
                  cursor: "pointer"
                }}
              />
            </Box>

            <Stack
              
              sx={{
                display: {
                  xs: 'none',
                  md: 'block'
                },
                '& > *':
                {
                  marginRight: '3px'
                }
              }} >
              {navBarContents.slice(0, 6).map((item, i) => (
                <Button
                  key={item.name}
                  color="info"
                  href={item.path}
                  sx={{
                    "&:after": {
                      content: "''",
                      position: "absolute",
                      backgroundColor: 'rgb(37 99 235)',
                      height: '3px',
                      width: 0,
                      left: 0,
                      bottom: '-5px',
                      transition: '0.3s'
                    },
                    "&:hover:after": {
                      width: '100%'
                    }
                  }}
                  onClick={clickNavigate(item.path)}
                  
                >
                  {item.name}
                </Button>
              ))}
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="info"
              >
                Programmi
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                        ? 'left top' 
                        : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>Realizzati</MenuItem>
                          <MenuItem onClick={handleClose}>In atto</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Stack>
            <Button
              color="primary"
              variant="contained"
              endIcon={<FavoriteIcon />}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex'
                },
                padding: 1.5,
                transition: "0.3s",
                "&:hover":
                {
                  backgroundColor: 'blue',
                  boxShadow: theme => ({
                    xs: 'none',
                    lg: theme.shadows[10]})
                }
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
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}