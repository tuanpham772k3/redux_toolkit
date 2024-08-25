import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './Count/CounterSlice'
import usersReducer from './User/UserSlice'
import themeReducer from './Theme/ThemeSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     users: usersReducer,
//     theme: themeReducer,
//   },
// })

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  theme: themeReducer,
})
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ["theme"] // Chỉ persist 'theme' slice
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch