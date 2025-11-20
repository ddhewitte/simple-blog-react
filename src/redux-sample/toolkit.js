import { createSlice, configureStore } from "@reduxjs/toolkit";

//Slice = action dan reducer
const blogCartSlice = createSlice({
    name: "Blog Cart",
    initialState: [],
    reducers: {
        //action
        addToBlogCart(state, action ){
            state.push(action.payload);
        }
    }
})

//Store
const store = configureStore({
    reducer: {
        blogCart : blogCartSlice.reducer
    }
})

//Debug
store.subscribe(() => {
    console.log('store', store.getState());
})

//Dispatch -> for trigger
store.dispatch(blogCartSlice.actions.addToBlogCart({ id : 1,  postCount: 20 }));
store.dispatch(blogCartSlice.actions.addToBlogCart({ id : 2,  postCount: 10 }));
store.dispatch(blogCartSlice.actions.addToBlogCart({ id : 3,  postCount: 6 }));
