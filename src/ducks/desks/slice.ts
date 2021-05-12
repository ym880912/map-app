import { createAsyncThunk, createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  list: Desk[]
}

export const initialState: DesksState = {
  list: []
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

// export const getDeskById = createAction<string | undefined>('getDeskById')

const desksSlice = createSlice({
  name: 'desks',
  initialState,
  reducers: {
    getDeskById (state, action: PayloadAction<string>) {
      state.list.filter(d => d.id === action.payload)[0]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDesksByEventId.fulfilled, (state, action) => {
      state.list = action.payload
    })
    // builder.addCase(getDeskById, (state, action) => {
    //   state.desks.filter(d => d.id === action.payload)[0]
    // })
  }
})

export default desksSlice
