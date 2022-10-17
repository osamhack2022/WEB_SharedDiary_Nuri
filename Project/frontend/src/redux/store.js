import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'
import authenticateReducer from './isauthenticated';
import diaryReducer from './diary';
import noteReducer from './note';

export default configureStore({
  reducer: {
    user: userReducer,
    authenticate: authenticateReducer,
    diary: diaryReducer,
    note: noteReducer,
  },
})