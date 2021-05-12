import { Store, combineReducers } from 'redux'
// import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import artistInformationSlice, { initialState as artistInormationState } from './artistInformation/slice'
import mapSlice, { initialState as mapState } from './map/slice'
import desksSlice, { initialState as desksState, fetchDesksByEventId } from './desks/slice'

const rootReducer = combineReducers({
  map: mapSlice.reducer,
  artistInformation: artistInformationSlice.reducer,
  desks: desksSlice.reducer
})

const preloadedState = () => {
  return {
    artistInformation: artistInormationState,
    map: mapState,
    desks: desksState
  }
}

export const fetchInitialData = async (dispatch) => {
  await dispatch(fetchDesksByEventId(1))
}

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = (preloadedState) => {
  const middlewareList = [...getDefaultMiddleware()]

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState
  })
}

// https://www.quintessential.gr/blog/development/how-to-integrate-redux-with-next-js-and-ssr
let store
export const initialiseStore = async () => {
  const initialState = preloadedState()
  let _store = store ?? createStore(initialState)

  if (store) {
    _store = createStore({ ...store.getState(), ...initialState })
    store = undefined
  }

  const { dispatch } = _store

  await fetchInitialData(dispatch)

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export default createStore
