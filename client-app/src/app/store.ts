import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import dialogReducer from '../features/dialog/dialogSlice';
import axios from 'axios';
import { catalogSlice } from '../features/catalog/catalogSlice';
import { basketSlice } from '../features/basket/basketSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        dialog: dialogReducer,
        catalog: catalogSlice.reducer,
        basket: basketSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

axios.interceptors.request.use((config) => {
    const token = store.getState().user.user?.token;
    if (token) {
        if (!config.headers) {
            config.headers = {};
        }

        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
