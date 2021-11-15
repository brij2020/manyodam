import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADMIN_URL, PRODUCTS_LIST, ADD_PRODUCT} from "../../utill/api.endpoints";
import { notify } from "../../utill/"
import { uploadImage } from "./ImageUpload"
export const ProductsList = createAsyncThunk(
    "fetchproducts/services",
    async (req,thunkAPI) => {
        try {
        const res  = await axios(`${API_ADMIN_URL}${PRODUCTS_LIST}`);
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
    async (req,dispatch) => {
        try {
        const res  = await axios.post(`${API_ADMIN_URL}${ADD_PRODUCT}`,req);
        if(res && res.data && res.data?.status) {
            notify("success", res.data?.message)
            dispatch(uploadImage())
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