import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import artistInformationSlice from '../ducks/artistInformation/slice'
import mapSlice from '../ducks/map/slice'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import { useFilteredDeskState } from '../ducks/desks/selectors'

const ImageSize = 70

const useStyles = makeStyles({
  root: {
    marginBottom: '1px',
    width: '100%',
    height: '70px',
    display: 'flex'
  },
  imageBox: {
    width: `${ImageSize}px`,
    height: `${ImageSize}px`,
    padding: '1px'
  },
  details: {
    width: `calc(100% - ${ImageSize}px - 80px)`,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  },
  actions: {
    width: '80px',
    display: 'flex'
  },
  actionButton: {
    padding: '5px'
  }
})

const myLoader = ({ src }) => {
  return src
}

export function ArtistCard ({ artist }) {
  const dispatch = useDispatch()
  const classes = useStyles()
  const desk = useFilteredDeskState(artist.deskId[0])[0]

  const openInformation = (e) => {
    e.stopPropagation()
    dispatch(artistInformationSlice.actions.open(artist.id))
  }

  const focusMap = (e) => {
    e.stopPropagation()

    console.log(desk, artist)
    dispatch(mapSlice.actions.focus({
      x: desk.x + desk.width/2,
      y: desk.y + desk.height/2,
      zoomLevel: 3
    }))
  }

  return (
    <Card
      className={classes.root}
      onClick={focusMap}
      raised
    >
      <div className = {classes.imageBox}>
        <Image
          height={ImageSize - 2}
          width={ImageSize - 2}
          src={artist.imageUrl}
          loader = {myLoader}
        />
      </div>

      <CardContent className={classes.details}>
        <Typography
          variant="h6"
          component="h6"
          noWrap
        >
          {artist.name}
        </Typography>
        <Typography
          variant="body2" color="textSecondary" component="p"
          noWrap
        >
          {artist.tag.join(', ')}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <IconButton
          className={classes.actionButton}
          aria-label="information"
          onClick={openInformation}
        >
          <InfoOutlinedIcon/>
        </IconButton>
        <IconButton
          className={classes.actionButton}
          aria-label="add to favorites"
        >
          <StarBorderOutlinedIcon/>
        </IconButton>
      </CardActions>
    </Card>
  )
}
