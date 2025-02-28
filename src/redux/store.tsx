import { configureStore } from "@reduxjs/toolkit";
import employeersSlice from "./employeeList/slice";

const store = configureStore({
    reducer: {
        employeers: employeersSlice
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch