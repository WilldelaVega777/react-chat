//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { configureStore } from '@reduxjs/toolkit';

import Reactotron from '../config/reactotron.config';

import userReducer from './slices/userSlice';
import appReducer from './slices/appSlice';

//-------------------------------------------------------------------------------
// Store Config Section
//-------------------------------------------------------------------------------
const enhancer = Reactotron.createEnhancer();
export default configureStore({
    reducer: {
        app: appReducer,
        user: userReducer
    },
    enhancer
});
