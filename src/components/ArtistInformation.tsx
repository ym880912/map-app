import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'

const ImageSize = 70

const useStyles = makeStyles({
  root: {
    width: '300px',
    padding: '10px',
    paddingBottom: '24px'
  },
  imageBox: {
    flexGrow: 1
  },
  details: {
    maxHeight: '500px',
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
  },

  informationBox: {
    maxHeight: '400px',
    overflow: 'scroll',
    paddingTop: '0px',
    paddingBottom: '0px',
    '&:last-child': {
      paddingBottom: '0px'
    }
  },
  tag: {},
  information: {}
})

const myLoader = ({ src }) => {
  return src
}

export function ArtistInformation ({ artist }) {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      raised
    >
      <Grid container>
        <Grid item
          xs={6}
          className = {classes.imageBox}
        >
          <Image
            height={120}
            width={120}
            src={artist.imageUrl}
            loader = {myLoader}
          />
        </Grid>
        <Grid item
          xs={6}
        >
          <Typography variant="h5" component="h2">
            {artist.name}
          </Typography>
          <Typography
            variant="body2" color="textSecondary" component="p"
            className={classes.tag}
          >
            {artist.tag.join(', ')}
          </Typography>
        </Grid>
      </Grid>
      <CardContent className={classes.informationBox}>
        {Object.keys(artist.information).map((key) =>
          <div
            key={key}
          >
            <Typography
              paragraph
            >
              {key}:
            </Typography>
            <Typography
              paragraph
            >
              {artist.information[key]}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
