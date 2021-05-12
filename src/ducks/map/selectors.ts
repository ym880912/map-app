import { useSelector } from 'react-redux'
import { MapState } from './slice'

export const useMapState = () => {
  return useSelector((state: { map: MapState }) => state)
}
