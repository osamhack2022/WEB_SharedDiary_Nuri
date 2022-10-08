import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {isAuthenticated: false}

export const authenticateSlice = createSlice({
    name: "authenticate",
    initialState: { value: initialStateValue},
    reducers: {
        authenticate: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { authenticate } = authenticateSlice.actions;

export default authenticateSlice.reducer;