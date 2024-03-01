import { createSelector, createSlice } from '@reduxjs/toolkit'
import exp from 'constants';

const initialState = {}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart(state,action) {
        const newItem = action.payload
        const existingItem = state.items.find((item) => item.id === newItem.id)
        if (existingItem)
        {
            existingItem.quantity++
            existingItem.totalPrice += newItem.price;
        }
        else
        {
            state.items.push({
                id : newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.name,
                cover: newItem.images,
            })
            state.totalQuantity++;
        }
    },

    removeFromCart(state,action){
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id)
      if(existingItem.quantity === 1)
      {
        state.items = state.items.filter((item)=>item.id !== id);
        state.totalQuantity--;

      }
      else{
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

    },

    removeFromAllCart(state,action){
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id)
      state.totalQuantity -= state.items.reduce((acc,item)=>acc + item.quantity,0);
      
  },
},
});

export const CartActions = cartSlice.actions
export const {} = cartSlice.actions

export const selectTotalQuantity = createSelector(  
  (state) => state.cart.items,
  (items) => items.reduce((acc) => acc + 1, 0)
  );

export const selectTotalPrice = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((acc,item) => acc + item.totalPrice, 0)
  );

export default cartSlice