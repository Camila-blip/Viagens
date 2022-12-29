import { createSlice  } from "@reduxjs/toolkit";

const reserve = createSlice({
    name: "reserve",
    initialState: [],
    reducers:{
        setReserva(state, actions){
            const tripIndex =  state.findIndex(trip => trip.id === actions.payload.id);
       
            if(tripIndex >= 0){
                state[tripIndex].amount +=1;
            }else{
                state.push({
                    ...actions.payload,
                    amount: 1
                });
                
            }
        },
        reservaDeleted(state, actions) {
            const tripIndex =  state.findIndex(trip => trip.id === actions.payload);
            if(tripIndex >= 0){
                state.splice(tripIndex, 1);
            }
        }
    }
});

export const  {setReserva, reservaDeleted} = reserve.actions;
export default reserve.reducer; 