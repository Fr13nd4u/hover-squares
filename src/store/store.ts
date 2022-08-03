import { combineReducers, configureStore } from '@reduxjs/toolkit';
import optionsReducer from './reducers/OptionsSlice'
import hoverSquaresSlice from './reducers/HoverSquaresSlice'

const rootReducer = combineReducers({
  optionsReducer,
  hoverSquaresSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];