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
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Image from 'next/image'

const ImageSize = 70;

const useStyles = makeStyles({
  root: {
    marginBottom: '1px',
    width: '100%',
    minHeight: '200px',
    display: 'flex',
  },
  imageBox: {
    width: `${ImageSize}px`,
    height: `${ImageSize}px`,
    padding: '1px',
  },
  details: {
    width: `calc(100% - ${ImageSize}px - 80px)`,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  actions: {
    width: '80px',
    display: 'flex',
  },
  actionButton: {
    padding: '5px',
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

export  function ArtistInformation({artist}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={
        () =>{
          alert(artist.id)
        }
      }
      raised
    >
      <div className = {classes.imageBox}>
        <Image
          height={ImageSize-2}
          width={ImageSize-2} 
          src={artist.imageUrl}
          loader = {myLoader}
        />
      </div>

        <CardContent className={classes.details}>
          <Typography variant="h6" component="h6">
            {artist.name}
          </Typography>
          <Typography
            variant="body2" color="textSecondary" component="p"
            className={classes.introduction}
          >
            {artist.tag.join(', ')}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableSpacing>
          <IconButton
            className={classes.actionButton}
            aria-label="add to favorites"
          >
            <FavoriteIcon/>
          </IconButton>
        </CardActions>
    </Card>
  )
}