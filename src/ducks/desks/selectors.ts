import { useSelector } from 'react-redux';
import { DesksState } from './slice';

export const useDesksState = () => {
  return useSelector((state: { desks: DesksState }) => state);
};