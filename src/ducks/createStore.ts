import { Store, combineReducers } from 'redux';
// import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import artistInformationSlice, { initialState as artistInormationState } from './artistInformation/slice';
import mapSlice, { initialState as mapState } from './map/slice';

const rootReducer = combineReducers({
  map: mapSlice.reducer,
  artistInformation: artistInformationSlice.reducer,
});

const preloadedState = () => {
  return { 
    artistInformation: artistInormationState,
    map: mapState, 
  };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export default createStore;