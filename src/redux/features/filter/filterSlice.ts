import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
      category: string;
      productType: string | null;
      size: string | null;
      color: string | null;
      gender: string | null;
      search: string;
}

const initialState: FilterState = {
      category: '',
      productType: '',
      size: '',
      color: '',
      gender: '',
      search: '',
};

const filterSlice = createSlice({
      name: 'filters',
      initialState,
      reducers: {
            setCategory: (state, action: PayloadAction<string>) => {
                  state.category = action.payload;
            },

            setProductType: (state, action: PayloadAction<string>) => {
                  state.productType = action.payload;
            },
            setSize: (state, action: PayloadAction<string | null>) => {
                  state.size = action.payload;
            },
            setColor: (state, action: PayloadAction<string | null>) => {
                  state.color = action.payload;
            },
            setGender: (state, action: PayloadAction<string | null>) => {
                  state.gender = action.payload;
            },
            setSearch: (state, action: PayloadAction<string>) => {
                  state.search = action.payload;
            },
            resetFilters: () => initialState,
      },
});

export const { setCategory, setSize, setColor, setGender, setSearch, resetFilters, setProductType } = filterSlice.actions;
export default filterSlice.reducer;
