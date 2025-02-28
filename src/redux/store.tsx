import { configureStore } from "@reduxjs/toolkit";
import employeersSlice from "./employeeList/slice";
import analiseResume from "./analiseResume/slice";
const store = configureStore({
    reducer: {
        employeers: employeersSlice,
        resume: analiseResume
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch