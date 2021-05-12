import { useSelector } from 'react-redux'
import { DesksState } from './slice'

export const useDesksState = () => {
  return useSelector((state: { desks: DesksState }) => state.desks.list)
}

export const useFilteredDeskState = (deskId) => {
  return useSelector((state: {desks: DesksState}) => state.desks.list.filter(d => d.id === deskId))
}
