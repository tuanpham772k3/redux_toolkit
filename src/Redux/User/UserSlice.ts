import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../src/axios";

export interface UsersState {
    listUser: any;
}

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await axios.get(`users`)
        console.log("data", response);
        return response

    },
);

const initialState: UsersState = {
    listUser: [],
};


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.listUser = action.payload
        })
    },
})

export default usersSlice.reducer