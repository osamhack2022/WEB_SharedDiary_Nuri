import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    id: "error", 
    nickname: "error", 
    background_image: "error", 
    profile_image: "error",
    self_intro: "error",
    user: "error",
    slug: "error"
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue},
    reducers: {
        user: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { user } = userSlice.actions;

export default userSlice.reducer;