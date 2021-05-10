import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ArtistInformationState = {
  id?: number,
  isOpen: boolean,
  loading: boolean,
}

export const initialState: ArtistInformationState = {
  id: null,
  isOpen: false,
  loading: false,
}

const artistInformationSlice = createSlice({
  name: 'artistInformation',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => ({
      ...state,
      id: action.payload,
    }),
    open: (state, action: PayloadAction<number>) => ({
      ...state,
      id: action.payload,
      isOpen: true,
    }),
    close: (state, action: PayloadAction) => ({
      ...state,
      isOpen: false,
    }),
  },
})

export default artistInformationSlice