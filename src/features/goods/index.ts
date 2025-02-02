import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { goods } from 'mocks/features/data/goods.json';
import type { GoodsType } from 'mocks/features/types';

type FilterState = {
  value: GoodsType[];
};

const initialState: FilterState = {
  value: goods,
};

export const displayGoodsSlice = createSlice({
  name: 'displayGoods',
  initialState,
  reducers: {
    filterGoods: (state, action: PayloadAction<{ method: string; value: string }>) => {
      const { method, value } = action.payload;
      switch (method) {
        case 'all': {
          state.value = goods;
          break;
        }
        case 'like': {
          const filterdAry = [...state.value].filter((item) => item.name.includes(value));
          state.value = filterdAry;
          break;
        }
        case 'match': {
          const filterdAry = goods.filter((item) => item.label === value);
          state.value = filterdAry;
          break;
        }
      }
    },
    sortGoods: (state, action: PayloadAction<{ category: string; sort: string }>) => {
      const { category, sort } = action.payload;
      let sortedGoods = [...state.value];
      switch (category) {
        case 'price': {
          sortedGoods = sortedGoods.sort((a, b) =>
            sort === 'high' ? b.price - a.price : a.price - b.price,
          );
          break;
        }
        case 'created': {
          sortedGoods = sortedGoods.sort((a, b) =>
            sort === 'new' ? b.created_at - a.created_at : a.created_at - b.created_at,
          );
          break;
        }
        default: {
          sortedGoods = sortedGoods.sort((a, b) => b.id - a.id);
          break;
        }
      }
      state.value = sortedGoods;
    },
  },
});

export const { filterGoods, sortGoods } = displayGoodsSlice.actions;
export default displayGoodsSlice.reducer;
