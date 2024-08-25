import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../src/axios";



export const fetchUserById = createAsyncThunk(
    'GetUser',
    async (userId, thunkAPI) => {
        const response = await axios.get(`users`)
        console.log("data", response);
        return response

    },
);

export const createUser = createAsyncThunk(
    'Create',
    async (payload: any, thunkAPI) => {
        const response = await axios.post(`users`,
            {
                name: payload.name,
                email: payload.email,
            });
        console.log("create", response);

        if (response && response.status === 201) {
            thunkAPI.dispatch(fetchUserById())
        }
        return response

    },
);

export interface UsersState {
    listUser: any;
}
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
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            // Add user to the state array
        })
    },
})

export default usersSlice.reducer