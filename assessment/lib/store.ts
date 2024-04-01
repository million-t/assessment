import { configureStore } from '@reduxjs/toolkit'
import hospitalsReducer from './features/hospitals/hospitalsSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      hospitals: hospitalsReducer,
    }
  })
}

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']