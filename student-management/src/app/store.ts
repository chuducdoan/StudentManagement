import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: true,

  // custom khi muon nhung them middleware
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
