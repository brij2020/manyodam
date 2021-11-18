import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADMIN_URL, IMAGE_UPLOAD} from "../../utill/api.endpoints";
import { notify } from "../../utill/"
export const uploadImage = createAsyncThunk(
    "uploadImage/services",
    async (req,thunkAPI) => {
        const { frmData , pid } = req;
        try {
        const res  = await axios.post(`${API_ADMIN_URL}${IMAGE_UPLOAD}?pid=${pid}`,frmData);
        if(res && res.data && res.data?.status) {
          //  notify("success", res.data?.message)
            return  res.data
        } else {
         //   notify("error", res.data?.message)
            return  res.data

        }
    } catch(e) {
        notify("error", "please try again")
        return {message: "please try again",status: false}
    }
        
    }
)