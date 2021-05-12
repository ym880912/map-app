import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_VALUE, setPointOnViewerCenter } from 'react-svg-pan-zoom'
import { SEARCHBAR_HEIGHT } from '../../components/SearchBar'
import { HEADERBAR_HEIGHT } from '../../components/HeaderBar'

export type MapState = {
  value: any,
  height: number,
  width: number,
  imageHeight: number,
  imageWidth: number,
  scale: number,
}

type ForcusPayload = {
  x: number,
  y: number,
  zoomLevel: number,
}

export const initialState: MapState = {
  value: INITIAL_VALUE,
  height: 750,
  width: 500,
  imageHeight: 750,
  imageWidth: 1000,
  scale: 1,
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setValue (state, action: PayloadAction<any>) {
      state.value = action.payload
    },
    handleReSize (state) {
      state.height = window.innerHeight- SEARCHBAR_HEIGHT - HEADERBAR_HEIGHT
      state.width = Math.min(1000, window.innerWidth)

      if (state.height > state.width) {
        // 縦長
        state.imageHeight = state.height
        state.scale = state.height / 750
        state.imageWidth = 1000 * state.scale 
      } else {
        // 横長
        state.imageWidth = state.width
        state.scale = state.width / 1000
        state.imageHeight = 750 * state.scale
      }
    },
    focus (state, action: PayloadAction<ForcusPayload>) {
      state.value = setPointOnViewerCenter(
        state.value,
        action.payload.x * state.scale,
        action.payload.y * state.scale,
        action.payload.zoomLevel
      )
    }
  }
})

export default mapSlice
