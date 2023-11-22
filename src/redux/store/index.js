import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentUserReducer from "../reducers/currentUserReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer
})

const store = configureStore({ 
  reducer: rootReducer
})

export default store