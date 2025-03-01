import { configureStore } from "@reduxjs/toolkit";
import employeersSlice from "./employeeList/slice";
import analiseResume from "./analiseResume/slice";
import employeerDetails from "./employee/slice";
import userReducer from "./user/slice";
const store = configureStore({
    reducer: {
        employeers: employeersSlice,
        resume: analiseResume,
        employeerDetails: employeerDetails,
        user: userReducer,
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch