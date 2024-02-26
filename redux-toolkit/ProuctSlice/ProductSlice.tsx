import { createSlice } from "@reduxjs/toolkit";
import { ProductInterFace } from "../InterFace/productInterFace";
import { act } from "react-dom/test-utils";
import { stat } from "fs";



interface CartState {
    items: ProductInterFace[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:
    {
        addToCart: (state, { payload }: { payload: ProductInterFace[] }) => {

            const prod = [...state.items]
             prod.push(...payload)
             //state.items=prod

        },

        removeCart: (state, action) => {

        }


    }
})

export const{addToCart}=cartSlice.actions;

export default cartSlice.reducer;