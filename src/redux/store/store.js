import { configureStore } from "@reduxjs/toolkit";
import blogCartReducer from "../slices/blogCartSlice";
import loginPremiumReducer from "../slices/loginPremiumSlice";

const store = configureStore({
    reducer: {
        blogCart : blogCartReducer,
        loginPremium : loginPremiumReducer
    }
})

//debug : watch store
store.subscribe(() => {
    console.log('Store now, ', store.getState());
});

export default store;