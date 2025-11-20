import { configureStore } from "@reduxjs/toolkit";
import blogCartReducer from "../slices/blogCartSlice";

const store = configureStore({
    reducer: {
        blogCart : blogCartReducer
    }
})

//debug : watch store
store.subscribe(() => {
    console.log('Store now, ', store.getState());
});

export default store;