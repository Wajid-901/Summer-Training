import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProduct } from "../services/productService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    return await getProduct(id);
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      })

      // Fetch single product
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })

      .addCase(fetchProductById.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch product";
      });
  },
});

export default productSlice.reducer;