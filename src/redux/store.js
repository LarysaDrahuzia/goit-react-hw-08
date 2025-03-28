import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsSlice from './contactsSlice';
import filtersSlice from './filtersSlice';

const persistedContactsSlice = persistReducer(
  {
    key: 'user_contact',
    storage,
  },
  contactsSlice
);

const persistedFiltersSlice = persistReducer(
  {
    key: 'user_filter',
    storage,
  },
  filtersSlice
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsSlice,
    filters: persistedFiltersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
