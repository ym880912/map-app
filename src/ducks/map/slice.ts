import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_VALUE, setPointOnViewerCenter } from 'react-svg-pan-zoom'

export type MapState = {
  value: any,
}

export type ForcusPayload = {
  x: number,
  y: number,
  zoomLevel: number,
}

export const initialState: MapState = {
  value: INITIAL_VALUE,
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<any>) {
      state.value =  action.payload
    },
    focus(state, action: PayloadAction<ForcusPayload>) {
      state.value = setPointOnViewerCenter(
        state.value,
        action.payload.x,
        action.payload.y,
        action.payload.zoomLevel
      )
    },
  },
})

export default mapSlice