import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import handleAuthError from "../services/fetchAuth";
// 🔹 Criando a Action Assíncrona para buscar funcionários
export const fetchEmployeers = createAsyncThunk("employeers/fetch", async (_, {getState,dispatch}) => {
  const state = getState() as RootState
  const token = state.user.token
  const response = await fetch("https://fopagscanapi-production.up.railway.app/employeers/",{
    method: "GET",
    headers: {
        Authorization:`Bearer ${token}`,
    }
  });
  const data = await response.json();
  handleAuthError(response,dispatch);
  return data;
});

// 🔹 Criando o Slice do Redux
const employeersSlice = createSlice({
  name: "employeers",
  initialState: { employeersList: {}, loading: false, error: false },
  reducers: {},
  extraReducers(builder) {
      builder
        .addCase(fetchEmployeers.pending, (state)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchEmployeers.fulfilled, (state, action) => {
            state.loading = false;
            state.employeersList = action.payload as Record<string, number[]>;
        })
        .addCase(fetchEmployeers.rejected, (state)=>{
            state.loading = false;
            state.error = true;
        })
  },
});

export default employeersSlice.reducer;
