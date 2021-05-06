import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { SearchBar } from './SearchBar'

// import styles from './layout.module.css'

export function Layout ({ children, classes }) {
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SearchBar />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )
}
