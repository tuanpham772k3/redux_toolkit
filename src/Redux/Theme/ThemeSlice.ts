import { createSlice } from "@reduxjs/toolkit";

const  initialState:{
    mode : string;
} = {
    mode : "light",
};

export const counterSlice = createSlice({
    name: "Theme",
    initialState,
    reducers :{
        isSetMode(state,action){
            state.mode = action.payload;
        },
    },
});
export const {isSetMode} = counterSlice.actions;

export default counterSlice.reducer;
