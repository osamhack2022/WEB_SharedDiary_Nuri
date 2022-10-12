import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = []

export const diarySlice = createSlice({
    name: "diary",
    initialState: { value: initialStateValue},
    reducers: {
        diary: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { diary } = diarySlice.actions;

export default diarySlice.reducer;