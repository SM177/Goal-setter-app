import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";

// get user from the local storage
const user = JSON.parse(localStorage.getItem("user"));

// create the initial state
const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

// register the user

export const register = createAsyncThunk('auth/register', async(user,thunkApi) =>{
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message
            || error.message || error.toString());
            return thunkApi.rejectWithValue(message)
    }
})

// post/register the user

// create auth slice

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(register.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    },
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;