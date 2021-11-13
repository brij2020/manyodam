import {createSlice} from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name:"loading",
    initialState:{payload:  false},
    reducers:{
       loadingAction: (state,{type,payload}) => {
            state.loading = payload
        }
    }
})
export const { loadingAction } = loadingSlice.actions;
export default loadingSlice.reducer;