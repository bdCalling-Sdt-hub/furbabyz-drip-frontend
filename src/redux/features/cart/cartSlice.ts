import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
      id: string;
      name: string;
      price: number;
      quantity: number;
      size: string;
      image: string;

      neckLength: number;
      chestLength: number;
      collarToTail: number;
}

//
interface CartState {
      items: CartItem[];
      subtotal: number;
      deliveryCost: number;
      totalAmount: number;
}

const initialState: CartState = {
      items: [],
      subtotal: 0,
      deliveryCost: 5.0,
      totalAmount: 0,
};

const calculateTotals = (items: CartItem[], deliveryCost: number) => {
      const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
      const totalAmount = subtotal + deliveryCost;
      return { subtotal, totalAmount };
};

const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            addToCart: (state, action: PayloadAction<CartItem>) => {
                  const existingItem = state.items.find((item) => item.id === action.payload.id);
                  if (existingItem) {
                        existingItem.quantity += 1;
                  } else {
                        state.items.push(action.payload);
                  }

                  const { subtotal, totalAmount } = calculateTotals(state.items, state.deliveryCost);
                  state.subtotal = subtotal;
                  state.totalAmount = totalAmount;
            },
            removeFromCart: (state, action: PayloadAction<string>) => {
                  state.items = state.items.filter((item) => item.id !== action.payload);

                  const { subtotal, totalAmount } = calculateTotals(state.items, state.deliveryCost);
                  state.subtotal = subtotal;
                  state.totalAmount = totalAmount;
            },
            updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
                  const item = state.items.find((item) => item.id === action.payload.id);
                  if (item) {
                        item.quantity = action.payload.quantity;
                  }

                  const { subtotal, totalAmount } = calculateTotals(state.items, state.deliveryCost);
                  state.subtotal = subtotal;
                  state.totalAmount = totalAmount;
            },
            setDeliveryCost: (state, action: PayloadAction<number>) => {
                  state.deliveryCost = action.payload;

                  const { subtotal, totalAmount } = calculateTotals(state.items, state.deliveryCost);
                  state.subtotal = subtotal;
                  state.totalAmount = totalAmount;
            },
      },
});

export const { addToCart, removeFromCart, updateQuantity, setDeliveryCost } = cartSlice.actions;

export default cartSlice.reducer;
