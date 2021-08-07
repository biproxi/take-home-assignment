//import { selectTodosInput } from "store/slices/TodoInput";
import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  value: string;
}
const initialState: InputState = {
  value: "",
};
const TodosInputSlice = createSlice({
  name: "todosInput",
  initialState,
  reducers: {
    addInput: (state, action: PayloadAction<InputState>) => {
      return action.payload;
    },
    clearInput: () => {
      return { value: "" };
    },
  },
});

export const { addInput, clearInput } = TodosInputSlice.actions;
// grabs the store abd
export const selectTodosInput = (state: RootState) => state.todosInput;
export default TodosInputSlice.reducer;
