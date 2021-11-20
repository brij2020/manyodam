import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    drawerAction: "",
    drawerData:{},
    pageName: "",
    title: ""
}
const Drawer = createSlice({
    name:"drawer/slice",
    initialState,
    reducers: {
        openDrawer: (state,action) => {
            const { type, data } = action.payload ?? {type: null,data: null} 
            state.drawerState = true;
            state.drawerData = data;
            state.drawerAction = type;

        },
        closeDrawer: (state,action) => {
            state.drawerState = false
            state.drawerData = {};
            state.drawerAction = "";
        }
    }
})
export const { openDrawer,closeDrawer} = Drawer.actions;
export default Drawer.reducer;