import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 🔹 Criando a Action Assíncrona para buscar funcionários
export const fetchLogin = createAsyncThunk("login/fetch", async ({username, password}:{username:string; password:string}) => {
    const formData = new URLSearchParams();
    formData.append("username",username);
    formData.append("password",password);
  
    const response = await fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
  
    const data = await response.json();
    return data;
  });

// 🔹 Criando o Slice do Redux
const loginSlice = createSlice({
  name: "user",
  initialState: { logged: !!localStorage.getItem("token"), token:localStorage.getItem("token"), loading: false, error: false },
  reducers: {
    logout: (state)=>{
        state.token = null;
        state.logged = false;
        localStorage.removeItem("token");
    }
  },
  extraReducers(builder) {
      builder
        .addCase(fetchLogin.pending, (state)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload["access_token"]
            localStorage.setItem("token", action.payload["access_token"])
            if (state.token){
                state.logged = true
            }
            else{
                state.logged = false
            }
        })
        .addCase(fetchLogin.rejected, (state)=>{
            state.loading = false;
            state.error = true;
        })
  },
});
export const {logout} = loginSlice.actions;
export default loginSlice.reducer;
