import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLaptop } from "~/api/laptopApi";


export const getDataLaptop = createAsyncThunk('laptop/detailproduct', async (param) => {
    const data = await getLaptop(param)
    return data
})
export const productSlice = createSlice({
    name: 'product',
    initialState: {
        item : []
    },
    extraReducers: (builder) => {
        builder.addCase(getDataLaptop.fulfilled, (state,action) => {
            state.item = action.payload
        })
    }
})


export default productSlice.reducer