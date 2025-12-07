import { configureStore, createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    add: (s, a) => {
      const idx = s.items.findIndex(i => i.id === a.payload.id);
      idx === -1 ? s.items.push({ ...a.payload, qty: 1 }) : s.items[idx].qty += 1;
    },
    remove: (s, a) => { s.items = s.items.filter(i => i.id !== a.payload); },
    clear: (s) => { s.items = []; },
  },
});
export const { add, remove, clear } = cartSlice.actions;
export default configureStore({ reducer: { cart: cartSlice.reducer } });