import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/slice/authSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage_raw from 'redux-persist/lib/storage';
const storage = (storage_raw as any).default || storage_raw;


const rootReducers = combineReducers({
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch