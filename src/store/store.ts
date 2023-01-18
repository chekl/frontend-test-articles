import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './articles'

export const store = configureStore({ reducer: articleReducer });

export type AppDispatch = typeof store.dispatch;