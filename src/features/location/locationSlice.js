import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocation } from "./locationAPI";

const initialState = {
  locationData: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getLocationByIp = createAsyncThunk(
  "location/getLocationByIp",
  getLocation
);
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    reset: (state) => {
      state.locationData = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocationByIp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLocationByIp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.locationData = action.payload;
      })
      .addCase(getLocationByIp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = locationSlice.actions;
export default locationSlice.reducer;
