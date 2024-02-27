import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductInterFace } from "../InterFace/productInterFace";
import { act } from "react-dom/test-utils";
import { stat } from "fs";
import { Products } from "@/InterFace/interface";



interface CartState {
    items: Products[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:
    {
        addToCart: (state,action) => {

             const prod = [...state?.items]
             prod.push({...action.payload,qnty:1})
             state.items=prod         

        },

        removeCart: (state, action) => {
            state.items=state.items.filter((item) => item.id !== action.payload)

        }


    }
})

export const{addToCart, removeCart}=cartSlice.actions;

export default cartSlice.reducer;

// const ItemExits=state.items.find((item)=> item.id===action.payload.id)
            // if (ItemExits){
            //     ItemExits
            // }else{
            //     state.items.push({...action.payload,quantity:1})
            // }
            