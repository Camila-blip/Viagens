import { createSlice } from "@reduxjs/toolkit";

const reserve = createSlice({
    name: "reserve",
    initialState: [],
    reducers:{
        setReserva(state, actions){
            console.log(actions);
            state.push({
                id: actions.payload.id
            });
   
        }
    }
});

export const  {setReserva} = reserve.actions;
export default reserve.reducer; 