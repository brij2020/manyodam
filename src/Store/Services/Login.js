import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ADMIN_URL, LOGIN_API} from "../../utill/api.endpoints"
export const UserLogin = createAsyncThunk(
    'login/loginStatus',
    async (reqData, thunkAPI) => {
        const res  =  await axios.post(`${API_ADMIN_URL}${LOGIN_API}`,reqData)
        return res.data ?? {message:"please try again", status: false}; 
});
