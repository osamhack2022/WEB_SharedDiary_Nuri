import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'
import authenticateReducer from './isauthenticated';
import diaryReducer from './diary';

export default configureStore({
  reducer: {
    user: userReducer,
    authenticate: authenticateReducer,
    diary: diaryReducer,
  },
})