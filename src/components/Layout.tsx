import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { HeaderBar, HEADERBAR_HEIGHT } from './HeaderBar'
import { makeStyles, fade, Theme } from '@material-ui/core/styles'
import { InformationModal } from './InformationModal'

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  content: {}
}))

export function Layout ({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderBar />
      <main className={classes.content}>
        {children}
      </main>
      <SearchBar />
      <InformationModal />
    </div>
  )
}
