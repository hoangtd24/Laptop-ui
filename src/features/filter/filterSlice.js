import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { filter } from '~/api/laptopApi';
export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        productLists: [],
        category: '',
        type: 1,
        page: 1,
        min: '',
        max: '',
    },
    reducers: {
        categoryChange: (state, action) => {
            state.category = action.payload;
        },
        typeChange: (state, action) => {
            state.type = action.payload;
        },
        pageChange: (state, action) => {
            state.page = action.payload;
        },
        sortChange: (state, action) => {
            state.sort = action.payload;
        },
        minPriceChange: (state, action) => {
            state.min = action.payload;
        },
        maxPriceChange: (state, action) => {
            state.max = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(filterProduct.fulfilled, (state, action) => {
            state.productLists = action.payload;
        });
    },
});

export const filterProduct = createAsyncThunk('product/filter', async (param) => {
    const result = await filter(param);
    return result;
});

export const { categoryChange, typeChange, pageChange, sortChange, minPriceChange, maxPriceChange} =
    filterSlice.actions;
export default filterSlice.reducer;
