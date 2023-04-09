import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..//app/store'
import { Product } from '../models/models'



// Define a type for the slice state
interface ProductsState {
  loading: boolean,
    error: boolean,
    favorites: Product[],
    products: Product[],
}

// Define the initial state using that type
const initialState: ProductsState = {
    loading: false,
    error:false,
    favorites: [],
    products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchStart(state) {
        state.loading = true
        state.error = false
    },
    getSuccessProducts(state, action: PayloadAction<Product[]>) {
        state.loading = false
        state.error = false
        state.products = action.payload
    },
    addFavorites(state, action: PayloadAction<Product>) {
        state.favorites = [...state.favorites, action.payload]
    },
    removeFavorites(state, action: PayloadAction<Product[]>) {
        state.favorites = action.payload
    },
    fetchFail(state) {
        state.loading = false
        state.error = true
    }
  },
})

export const {fetchStart,fetchFail,getSuccessProducts,addFavorites,removeFavorites } = productsSlice.actions


export const productsReducer = productsSlice.reducer