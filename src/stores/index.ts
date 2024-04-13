import displayGoodsReducer from '@/features/goods';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { displayGoods: displayGoodsReducer },
});
export type RootState = ReturnType<typeof store.getState>;
