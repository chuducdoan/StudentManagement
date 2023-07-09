import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface ThemePayload {
  selectTheme: "light" | "dark";
}

interface ThemeState {
  selectTheme: string;
  count: number;
}

const initialState: ThemeState = {
  selectTheme: "light",
  count: 0,
};

const themeSilce = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemePayload>) => {
      state.selectTheme = action.payload.selectTheme;
    },
  },
});

export const { setTheme } = themeSilce.actions;

export const selectTheme = (state: RootState) => state.theme.selectTheme;

export default themeSilce.reducer;
