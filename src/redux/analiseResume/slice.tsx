import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 🔹 Criando a Action Assíncrona para buscar funcionários
export const fetchUpload = createAsyncThunk("upload/fetch", async (file) => {
    const formData = new FormData();
    formData.append("file", file); // 🔹 Adiciona o arquivo ao FormData
  
    const response = await fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    return data;
  });
  

// 🔹 Criando o Slice do Redux
const analiseResumeSlice = createSlice({
  name: "analiseResume",
  initialState: { processed:false, employeersNumber:0, loading:false, error:false },
  reducers: {},
  extraReducers(builder) {
      builder
        .addCase(fetchUpload.pending, (state)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchUpload.fulfilled, (state, action) => {
            state.loading = false;
            state.processed = true;
            state.employeersNumber = action.payload['total_funcionarios']
        })
        .addCase(fetchUpload.rejected, (state)=>{
            state.loading = false;
            state.error = true;
        })
  },
});

export default analiseResumeSlice.reducer;
