import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import handleAuthError from "../services/fetchAuth";
// 🔹 Criando a Action Assíncrona para buscar funcionários
export const fetchUpload = createAsyncThunk("upload/fetch", async (file:File, {getState,dispatch}) => {
    const state = getState() as RootState
    const token = state.user.token
    const formData = new FormData();
    formData.append("file", file); // 🔹 Adiciona o arquivo ao FormData
    const response = await fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      headers: {
        Authorization:`Bearer ${token}`,
      },
      body: formData,
    });
  
    const data = await response.json();
    handleAuthError(response,dispatch);
    return data;
  });
  

// 🔹 Criando o Slice do Redux
const analiseResumeSlice = createSlice({
  name: "analiseResume",
  initialState: { processed:false, AnalisedEmployeersNumber:0, BaseEmployeersNumber:0, inconsistencies:0, difValor:0, loading:false, error:false },
  reducers: {
    restartState:(state)=>{
        state.processed = false;
    }
  },
  extraReducers(builder) {
      builder
        .addCase(fetchUpload.pending, (state)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchUpload.fulfilled, (state, action) => {
            state.loading = false;
            state.processed = true;
            state.AnalisedEmployeersNumber = action.payload['total_funcionarios_analisados']
            state.BaseEmployeersNumber = action.payload['total_funcionarios_base']
            state.inconsistencies = action.payload['inconsistencias']
            state.difValor = action.payload['total_diferença']
        })
        .addCase(fetchUpload.rejected, (state)=>{
            state.loading = false;
            state.error = true;
        })
  },
});

export const {restartState} = analiseResumeSlice.actions
export default analiseResumeSlice.reducer;
