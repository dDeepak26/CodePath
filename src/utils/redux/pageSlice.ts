import { createSlice } from "@reduxjs/toolkit";

// Define the state type
interface PageState {
  currentPage: "ProblemListPage" | "ProfilePage";
}

// Initial state
const initialState: PageState = {
  currentPage: "ProblemListPage",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    togglePage: (state) => {
      state.currentPage =
        state.currentPage === "ProblemListPage"
          ? "ProfilePage"
          : "ProblemListPage";
    },
  },
});

export const { togglePage } = pageSlice.actions;
export default pageSlice.reducer;
