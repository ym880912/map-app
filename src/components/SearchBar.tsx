import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles, fade, Theme, useTheme } from '@material-ui/core/styles'

import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'

import { CatalogBox } from './CatalogBox'

export const SEARCHBAR_HEIGHT = 50 // px指定すること
const drawerHeight = `calc(50% - ${SEARCHBAR_HEIGHT}px)`

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    height: `${SEARCHBAR_HEIGHT}px`,
    transition: theme.transitions.create(['bottom'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    top: 'auto',
    bottom: `${drawerHeight}`,
    height: `${SEARCHBAR_HEIGHT}px`,
    transition: theme.transitions.create(['bottom'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  tool: {
    minHeight: `${SEARCHBAR_HEIGHT}px`
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: '100%',
    flexShrink: 0
  },
  drawerPaper: {
    width: '100%',
    height: `${drawerHeight}`
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: '10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },

  toggleButton: {
    padding: '7px',
    color: 'inherit',
    borderColor: fade(theme.palette.common.white, 0.15),
    '&.Mui-selected': {
      color: 'inherit',
      backgroundColor: fade(theme.palette.common.white, 0.15)
    },
    '&.Mui-selected:hover': {
      color: 'inherit',
      backgroundColor: fade(theme.palette.common.white, 0.15)
    }
  }
}))

export const SearchBar:FC = ({}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [listType, setlistType] = React.useState<string | null>('all')
  const theme = useTheme()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleListType = (event: React.MouseEvent<HTMLElement>, newListType: string | null) => {
    setlistType(newListType)
  }

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.tool}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ExpandLessIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}
            edge="start"
            className={clsx(classes.menuButton, !open && classes.hide)}
          >
            <ExpandMoreIcon />
          </IconButton>
          <ToggleButtonGroup
            value={listType}
            exclusive
            onChange={handleListType}
            className={clsx(!open && classes.hide)}
          >
            <ToggleButton
              value="all"
              className={classes.toggleButton}
            >
              <MenuBookIcon />
            </ToggleButton>
            <ToggleButton
              value="fav"
              className={classes.toggleButton}
            >
              <StarBorderOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="bottom"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
      >
        <CatalogBox />
      </Drawer>
    </div>
  )
}
