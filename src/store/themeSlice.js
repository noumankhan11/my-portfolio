import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      console.log("state change to :", state.darkMode);
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
