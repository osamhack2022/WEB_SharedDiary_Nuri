import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    username: "유저네임", nickname: "닉네임", selfIntro: "셀프인트로", profileImg: "이미지다",
    // email: "", lastLogin: "", token: "", username: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;