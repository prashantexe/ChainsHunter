import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  name: "authslice",
  initialState: {
    someValue: null,
    selectedTime: 300,
  },
  reducers: {
    setSomeValue: (state, action) => {
      state.someValue = action.payload;
    },
    setSelectedTime: (state, action) => {
      console.log(
        "Reducer setSelectedTime called with payload:",
        action.payload
      );
      state.selectedTime = action.payload;
    },
  },
});

export const { setSomeValue, setSelectedTime } = authslice.actions;
export default authslice.reducer;
