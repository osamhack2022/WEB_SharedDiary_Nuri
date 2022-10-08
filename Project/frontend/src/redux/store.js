import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'
import authenticateReducer from './isauthenticated';

export default configureStore({
  reducer: {
    user: userReducer,
    authenticate: authenticateReducer,
  },
})