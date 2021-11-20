import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADMIN_URL, PRODUCTS_LIST, ADD_PRODUCT,UPDATE_PRODUCT,REMOVE_PRODUCT} from "../../utill/api.endpoints";
import { notify } from "../../utill/"
import { updateProduct } from "../slices/Products.slice"
export const ProductsList = createAsyncThunk(
    "fetchproducts/services",
    async (req,thunkAPI) => {
        try {
        const res  = await axios.post(`${API_ADMIN_URL}${PRODUCTS_LIST}`,{collectiontype: req.collectiontype});
        if(res && res.data && res.data?.status) {
            notify("success", res.data?.message)
            return  res.data
        } else {
            notify("error", res.data?.message)
            return  res.data

        }
    } catch(e) {
        notify("error", "please try again")
        return {message: "please try again",status: false}
    }
        
    }
)
export const AddProduct = createAsyncThunk(
    "createproduct/services",
    async (req,thunkAPI) => {
       let res  = null
       let opType = req.type
        try {
        if(req.type === "Edit") {
            delete req.type
            res  = await axios.post(`${API_ADMIN_URL}${UPDATE_PRODUCT}`,req);

        } else {
            delete req.type
            res  = await axios.post(`${API_ADMIN_URL}${ADD_PRODUCT}`,req);
        }
        if(res && res.data && res.data?.status) {
            if(opType && opType === "Edit") {
                let { products } = thunkAPI.getState()?.productsListReducer ?? [];
                let p = products.map(pro => pro._id === req.id ? Object.assign({},pro,req) : pro)
                thunkAPI.dispatch(updateProduct(p))
            }
            notify("success", res.data?.message)
            return  res.data
        } else {
            notify("error", res.data?.message)
            return  res.data

        }
    } catch(e) {
        notify("error", "please try again")
        return {message: "please try again",status: false}
    }
        
    }
)

export const RemoveProduct = createAsyncThunk(
    "removeproduct/services",
    async (req,thunkAPI) => {
        try {
            const res  = await axios.post(`${API_ADMIN_URL}${REMOVE_PRODUCT}`,req);
            if(res && res.data && res.data?.status) {
            let { products } = thunkAPI.getState()?.productsListReducer ?? [];
            let p = products.filter(pro => pro._id !== req.id  )
            thunkAPI.dispatch(updateProduct(p))
            notify("success", res.data?.message)
            return  res.data
        } else {
            notify("error", res.data?.message)
            return  res.data

        }
    } catch(e) {
        notify("error", "please try again")
        return {message: "please try again",status: false}
    }
        
    })