import React, { useEffect, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { HeaderBar, HEADERBAR_HEIGHT } from '../components/HeaderBar'
import { makeStyles, fade, Theme } from '@material-ui/core/styles'
import { InformationModal } from '../components/InformationModal'
import { Map } from '../components/Map'

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  content: {}
}))

export default function Home () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderBar />
      <main className={classes.content}>
        <Map />
      </main>
      <SearchBar />
      <InformationModal />
    </div>
  )
}
