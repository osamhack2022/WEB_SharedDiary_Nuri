import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = []

export const noteSlice = createSlice({
    name: "note",
    initialState: { value: initialStateValue},
    reducers: {
        note: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { note } = noteSlice.actions;

export default noteSlice.reducer;