import axios from "axios";

const locationAPI =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_eHUa2KiA6RcR4yrUjjEiMbx4V2VBy&ipAddress=";
export const getLocation = async (ipAddress, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(locationAPI + ipAddress, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    const message = () => {
      if (error) return "Server Error";
    };
    return rejectWithValue(message);
  }
};
