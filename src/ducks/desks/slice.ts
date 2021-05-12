import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllDesk } from '../../mocks/mocks'
import axios from 'axios'

export type Desk = {
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
}

export type DesksState = {
  desks: Desk[]
}

export const initialState: DesksState = {
  desks: []
}


export const fetchDesksByEventId = createAsyncThunk<Desk[], number, any>(
  'fetchDesksByEventId',
  async (arg, thunkAPI) => {
    return getAllDesk()
    // const source = axios.CancelToken.source()
    // signal.addEventListener('abort', () => {
    //   source.cancel()
    // })
    // const response = await axios.get(``, {
    //   cancelToken: source.token,
    // })
    // return response.data
  }
)


const desksSlice = createSlice({
  name: 'desks',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchDesksByEventId.fulfilled]: (state, action) => {
      state.desks = action.payload
    }
  },
})

export default desksSlice