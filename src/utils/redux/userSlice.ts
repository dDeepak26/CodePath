import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user"; // Make sure this type is correctly defined

// Define initial state with proper types
const initialState: User = {
  username: "",
  createdAt: "",
  solvedProblem: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.createdAt = action.payload.createdAt;
      state.solvedProblem = action.payload.solvedProblem;
    },
  },
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
