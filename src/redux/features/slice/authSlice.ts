import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  token: null,
  user: {
    name: "",
    role: "",
    mobileNo: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.status = false;
      state.token = null;
      state.user = {
        name: "",
        role: "",
        mobileNo: "",
        email: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: "",
        },
      };
    },
    addAddress: (state, action) => {
      state.user.address = action.payload;
    },
  },
});

export const { login, logout, addAddress } = authSlice.actions;

export default authSlice.reducer;
