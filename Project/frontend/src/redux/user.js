import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: { value: {username: "유저네임", nickname: "닉네임", selfIntro: "셀프인트로", profileImg: "이미지다"}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;