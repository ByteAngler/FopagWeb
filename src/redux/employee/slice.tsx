import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// 🔹 Criando a Action Assíncrona para buscar funcionários
export const fetchDetails = createAsyncThunk("employee/fetch", async (name:string,{getState}) => {

    const state = getState() as RootState;
    const token  = state.user.token
    const response = await fetch(`http://127.0.0.1:8000/details/?nome=${name}`,{
        method: "GET",
        headers: {
            Authorization:`Bearer ${token}`,
          },
    });
  
    const data = await response.json();
    return data;
  });
  

const initialState = {
    nome: 'Selecione um Servidor',
    baseBrute: '0',
    analisedBrute:'0',
    baseDiscount:'0',
    analisedDiscount:'0',
    baseLiquid:'0',
    analisedLiquid:'0',
    baseBlock:[],
    analisedBlock:[],
    loading:false,
    error:false,

}

// 🔹 Criando o Slice do Redux
const employeeDetailSlice = createSlice({
  name: "employeeDetail",
  initialState: initialState,
  reducers: {
    resetState:() => initialState,
  },
  extraReducers(builder) {
      builder
        .addCase(fetchDetails.pending, (state)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.nome = action.payload['Nome'];
            state.baseBrute = action.payload['Base de comparação'];
            state.analisedBrute = action.payload['Base analisado'];
            state.baseDiscount = action.payload['Descontos de comparação'];
            state.analisedDiscount = action.payload['Descontos analisado'];
            state.baseLiquid = action.payload['Liquido de comparação'];
            state.analisedLiquid = action.payload['Liquido analisado'];
            state.baseBlock = action.payload['Bloco de comparação'];
            state.analisedBlock = action.payload['Bloco analisado']
        })    
        .addCase(fetchDetails.rejected, (state)=>{
            state.loading = false;
            state.error = true;
        })
  },
});

export const {resetState} = employeeDetailSlice.actions
export default employeeDetailSlice.reducer;
