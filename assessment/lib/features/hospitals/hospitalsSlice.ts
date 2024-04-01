import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const api = "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/search?institutions=true&articles=false&doctors=false";
const searchApi = 'https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/search?'
const suff = '&institutions=true&articles=false&doctors=false'

export const fetchHospitals = createAsyncThunk(
    'hospitals/fetchHospitals',
    async (thunkApi) => {
        const response = await fetch(api,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const data = await response.json();
        return data.data;
    }
        
);

export const searchHospitals = createAsyncThunk(
    'hospitals/searchHospitals',
    async (keyword:string, thunkApi) => {
        const response = await fetch( searchApi + 'keyword=' + keyword + suff,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data.data;
    }

);

const initialState = {
    hospitals: [],
} as any


const hospitalsSlice = createSlice({
    name: 'hospitals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHospitals.fulfilled, (state, action) => {
            state.hospitals = action.payload;
        });
        builder.addCase(searchHospitals.fulfilled, (state, action) => {
            state.hospitals = action.payload;
        });
        
    }
});


export default hospitalsSlice.reducer;