import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import inputReduser from '../features/todo/inputSlice'

import { combineReducers, } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'cnu3i4ut84ntv4785hy64n5v45hy45v',
  storage,
}

const rootReducer = combineReducers({
  todo: todoReducer,
  input: inputReduser

});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//     input: inputReduser
//   }
// })

const persistor = persistStore(store)
export {persistor};

export type StoreState = ReturnType<typeof store.getState>