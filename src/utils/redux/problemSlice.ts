import { Problem } from "@/types/problems";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface problemState {
  problem: Problem[];
}

const initialState: problemState = {
  problem: [],
};

const problemSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {
    addProblems: (state, action: PayloadAction<Problem[]>) => {
      state.problem = action.payload;
    },
  },
});

export const { addProblems } = problemSlice.actions;
export default problemSlice.reducer;
