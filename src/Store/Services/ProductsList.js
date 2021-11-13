import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADMIN_URL, PRODUCTS_LIST} from "../../utill/api.endpoints";
import { notify } from "../../utill/"
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