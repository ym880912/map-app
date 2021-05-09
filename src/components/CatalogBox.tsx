import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { getAllArtist } from '../mocks/mocks'
import { ArtistCard } from './ArtistCard'

const artists = getAllArtist()

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#22242A',
  },
})

export const CatalogBox: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
    {artists.map(a =>(
      <ArtistCard 
        artist={a}
      />
    ))}
    </div>
  )
}
