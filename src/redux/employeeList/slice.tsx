import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 🔹 Criando a Action Assíncrona para buscar funcionários
export const fetchEmployeers = createAsyncThunk("employeers/fetch", async () => {
  const response = await fetch("http://127.0.0.1:8000/employeers/");
  const data = await response.json();
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
            state.employeersList = action.payload;
        })
        .addCase(fetchEmployeers.rejected, (state)=>{
            state.loading = false;
            state.error = true;
        })
  },
});

export default employeersSlice.reducer;
