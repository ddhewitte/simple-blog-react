import { createSlice } from "@reduxjs/toolkit";

const blogCartSlice = createSlice({
    name: "Blog Cart Store Implementation",
    initialState: {
        items: [], 
        totalCount: 0,
        lastUpdated: null
    },
    reducers: {
        //Add cart
        AddToBlogCart(state, action){
            //add item
            state.items.push(action.payload);
            //update count
            state.totalCount++;
            //update lastUpdate
            state.lastUpdated = Date.now();
        },

        //Update Cart
        UpdateToBlogCart(state, action){
            const {id, postCount} = action.payload;
            //find in state.items
            const item = state.items.find((i) => i.id === id);
            if(item){
                item.postCount = postCount; //change state.items.postCount
                state.lastUpdated = Date.now();
            }
        }

        //Delete
        //ClearCart
    }
})

export const { AddToBlogCart, UpdateToBlogCart} = blogCartSlice.actions;
export default blogCartSlice.reducer;