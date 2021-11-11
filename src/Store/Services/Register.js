import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ADMIN_URL, REGISTER_API} from "../../utill/api.endpoints"
export const RegisterService = createAsyncThunk(
    "register/servece",
    async(req,thunkAPI) => {
       const res =  await axios.post(`${API_ADMIN_URL}${REGISTER_API}`,req)
        return res.data ?? {message:"please try again", status: false}; 
         
    }
)