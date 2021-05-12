import { useSelector } from 'react-redux'
import { ArtistInformationState } from './slice'

export const useArtistInformationState = () => {
  return useSelector((state: { artistInformation: ArtistInformationState }) => state)
}
