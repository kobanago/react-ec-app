import displayGoodsReducer from '@/features/goods';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { displayGoods: displayGoodsReducer },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
