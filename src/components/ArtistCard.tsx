import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Image from 'next/image'

const useStyles = makeStyles({
  root: {
    width: '200px',
    Height: '1000px',
  },
  introduction: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  },
})

const myLoader = ({ src }) => {
  return src
}

export  function ArtistCard({artist}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Image
        height={200}
        width={200} 
        src={artist.imageUrl}
        loader = {myLoader}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {artist.name}
        </Typography>
        <Typography
          variant="body2" color="textSecondary" component="p"
          className={classes.introduction}
        >
          {artist.information}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}