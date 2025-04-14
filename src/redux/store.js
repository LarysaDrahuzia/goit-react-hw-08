import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/slice';
import filtersSlice from './filters/slice';
import authSlice from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedAuthReducer = persistReducer(
  {
    key: 'user-token',
    storage,
    whitelist: ['token'],
  },
  authSlice
);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
