import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, fade, Theme, useTheme } from '@material-ui/core/styles'

export const HEADERBAR_HEIGHT = 30 // px指定すること

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  appBar: {
    position: 'inherit',
    height: `${HEADERBAR_HEIGHT}px`
  },
  title: {
    flexGrow: 1,
    paddingLeft: '10px'
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block'
    // }
  }
}))

export const HeaderBar:FC = ({}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appBar}
      >
        {/* <Toolbar> */}
          <Typography className={classes.title} variant="h6" noWrap>
            DESIGN FESTA vol.53
          </Typography>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  )
}
