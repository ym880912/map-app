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

const ImageSize = 70;

const useStyles = makeStyles({
  root: {
    marginBottom: '1px',
    width: '100%',
    height: '70px',
    display: 'flex',
  },
  imageBox: {
    width: `${ImageSize}px`,
    height: `${ImageSize}px`,
  },
  details: {
    width: `calc(100% - ${ImageSize}px)`,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    "&:last-child": {
      paddingBottom: '10px',
    }
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
    <Card className={classes.root} raised>
      <div className = {classes.imageBox}>
        <Image
          height={ImageSize}
          width={ImageSize} 
          src={artist.imageUrl}
          loader = {myLoader}
        />
      </div>

        <CardContent className={classes.details}>
          <Typography variant="h6" component="h6">
            {artist.name}
          </Typography>
          {/* <Typography
            variant="body2" color="textSecondary" component="p"
            className={classes.introduction}
          >
            {artist.date}
          </Typography> */}
          <Typography
            variant="body2" color="textSecondary" component="p"
            className={classes.introduction}
          >
            {artist.tag.join(', ')}
          </Typography>
          {/* <Typography
            variant="body2" color="textSecondary" component="p"
            className={classes.introduction}
          >
            {artist.information}
          </Typography> */}
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions> */}

    </Card>
  )
}