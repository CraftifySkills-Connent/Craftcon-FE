import { createSlice } from "@reduxjs/toolkit";


interface UserState {
    user: string,
    loading: "idle" | "pending" | "fulfilled" | "rejected";
    error?: unknown;
    isLoggedIn: boolean;
  }

const initialState: UserState = {
    user: "",
    loading: "idle",
    error: null,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        clearError: (state) => {
            state.error = null;
          },
        login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem("craftcon_user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = initialState.user;
            localStorage.removeItem("craftcon_user");
          },
    }
})

export const { clearError, login, logout } = userSlice.actions;
export default userSlice.reducer