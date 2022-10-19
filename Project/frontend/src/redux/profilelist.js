import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = []

export const profilelistSlice = createSlice({
    name: "profilelist",
    initialState: { value: initialStateValue},
    reducers: {
        profilelist: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { profilelist } = profilelistSlice.actions;

export default profilelistSlice.reducer;