import { createSlice } from "@reduxjs/toolkit";

const loginPremiumSlice = createSlice({
    name: "Login Premium Slice",
    initialState : {
        isTokenMembership : false,
        username : ""
    },
    reducers: {
        SetTokenMembership(state, action){
            state.isTokenMembership = action.payload.isTokenMembership;
            state.username = action.payload.username;
        },
        SetTokenOff(state, action){
            state.isTokenMembership = false;
            state.username = "";
        }
    }
});

export const { SetTokenMembership, SetTokenOff } = loginPremiumSlice.actions;
export default loginPremiumSlice.reducer;