// store.js (Redux Store)
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Correct named import
import { profileReducer } from './reducers'; 

const store = configureStore({
    reducer: profileReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(thunk), // Use callback to add thunk to default middleware
});

export default store;
