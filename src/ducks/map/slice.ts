import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_VALUE } from 'react-svg-pan-zoom'

export type MapState = {
  value: any,
}

export const initialState: MapState = {
  value: INITIAL_VALUE,

}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<any>) => ({
      ...state,
      value: action.payload,
    }),
  },
})

export default mapSlice