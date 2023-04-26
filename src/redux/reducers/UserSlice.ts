import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
   name: string;
   email: string;
   id: string;
   isActivated: boolean;
}

const initialState: UserState = {
   name: "",
   email: "",
   id: "",
   isActivated: false,
};

export const userSlice = createSlice({
   name: "registration",
   initialState,
   reducers: {},
});

export default userSlice.reducer;