import { createSlice } from "@reduxjs/toolkit";
import { ProductsList } from "../Services/ProductsList"

const ProductsListSlice = createSlice({
    name: "productslist",
    initialState:{loading: false,products:[]},
    reducers:{},
    extraReducers:{
        [ProductsList.pending]: (state,{ type, payload}) =>{
            state.loading = true
        },
        [ProductsList.fulfilled]:(state,{type, payload}) => {
            state.loading = false;
            state.products =  payload?.data

        },
        [ProductsList.rejected]: (state,{ type, payload}) => {
            state.loading = false
            state.productslists = payload 
        }
    }
    
})
export default ProductsListSlice.reducer;