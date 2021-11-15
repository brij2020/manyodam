import { createSlice } from "@reduxjs/toolkit";
import { ProductsList,AddProduct } from "../Services/ProductsList"

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
export const productsListReducer  =  ProductsListSlice.reducer;

const ProductCreateSlice = createSlice({
    name: "createproduct",
    reducers:{},
    extraReducers:{
        [AddProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [AddProduct.fulfilled]: (state,action) => {
            state.newproduct = action.payload;
            state.loading = false
        },
        [AddProduct.rejected]: (state,action) =>{
            state.loading = false
        }    
    }
})
export const ProductCreateReducer = ProductsListSlice.reducer;
