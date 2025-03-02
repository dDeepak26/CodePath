import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface ModalState {
  isOpen: boolean;
  videoUrl: any;
}

// Initial state
const initialState: ModalState = {
  isOpen: false,
  videoUrl: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.videoUrl = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.videoUrl = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
