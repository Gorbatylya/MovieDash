
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react"; 
import { isExpressionWithTypeArguments } from "typescript";

interface IUser {
   id: number;
   name: string;
   email: string;
}

interface UserState {
   users: IUser[];
   isLoading: boolean;
   error: string;
   count:number;
}

const initialState: UserState = {
   users: [],
   isLoading: false,
   error: '',
   count: 0,
}


export const UserSlice = createSlice( { //reducers
   name: 'user', //everyone has unic name
   initialState, //default value of state is passed here
   reducers: { //as switch case
      increment(state,action:PayloadAction<number>){
         state.count += action.payload;
      }
   }

})

export default UserSlice.reducer
