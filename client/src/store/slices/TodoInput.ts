//import { PayloadAction } from "@reduxjs/toolkit";
//import { selectTodosInput } from "store/slices/TodoInput";
import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  value: string;
  edit: number;
}
const initialState: InputState = {
  value: "",
  edit: 0,
};

const TodosInputSlice = createSlice({
  name: "todosInput",
  initialState,
  reducers: {
    addInput: (state, action: PayloadAction<InputState>) => {
      return action.payload;
    },
    clearInput: () => {
      return { value: "", edit: 0 };
    },
    toggleEdit: (state, action: PayloadAction<number>) => {
      return { ...state, edit: action.payload };
    },
  },
});

export const { addInput, clearInput, toggleEdit } = TodosInputSlice.actions;
// grabs the store abd
export const selectTodosInput = (state: RootState) => state.todosInput;
export default TodosInputSlice.reducer;
