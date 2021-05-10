import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ArtistInformation } from '../components/ArtistInformation'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux'
import { useArtistInformationState } from '../ducks/artistInformation/selectors'
import artistInformationSlice from '../ducks/artistInformation/slice'
import { getArtist } from '../mocks/mocks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      paddingTop: '50px',
      width: '300px',
      margin: 'auto',
    },
  }),
);

export function InformationModal() {
  const dispatch = useDispatch()
  const state = useArtistInformationState().artistInformation
  const classes = useStyles();

  return (
    <Modal
      open={state.isOpen}
      onClose={() => dispatch(artistInformationSlice.actions.close())}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={state.isOpen}>
        <div className={classes.paper}>
          <ArtistInformation artist={getArtist(state.id)}/>
        </div>
      </Fade>
    </Modal>
  )
}