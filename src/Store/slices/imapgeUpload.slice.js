import { createSlice } from "@reduxjs/toolkit";
import  { uploadImage } from "../Services/ImageUpload"
const ImageUploadSlice = createSlice({
    name: "image/slice",
    initialState: { loading: false,data: []},
    reducers:{}, 
    extraReducers: {
        [uploadImage.pending]: (state,action) => {
            state.loading = true
        },
        [uploadImage.fulfilled]: (state,action) => {
            state.loading = false;
        },
        [uploadImage.reject]: (state,action) => {
            state.loading = false;
        },
    }
})

export default ImageUploadSlice.reducer;