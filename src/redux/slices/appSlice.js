//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { createSlice } from '@reduxjs/toolkit';


//-------------------------------------------------------------------------------
// Slice / Reducer Section
//-------------------------------------------------------------------------------
const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelId   : null,
        channelName : null
    },
    reducers: {
        setChannelInfo  : (state, action) => {
            state.channelId     = action.payload.channelId;
            state.channelName   = action.payload.channelName;
        }
    }
});


//-------------------------------------------------------------------------------
// Actions Section
//-------------------------------------------------------------------------------
export const { setChannelInfo } = appSlice.actions;


//-------------------------------------------------------------------------------
// Selectors Section
//-------------------------------------------------------------------------------
export const selectChannelId    = state => state.app.channelId;
export const selectChannelName  = state => state.app.channelName;


//-------------------------------------------------------------------------------
// Exports Section
//-------------------------------------------------------------------------------
export default appSlice.reducer;
