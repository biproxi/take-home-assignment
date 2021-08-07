import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputEditState {
  value: string;
}
const initialState: InputEditState = {
  value: "",
};

const TodosInputEditSlice = createSlice({
  name: "todosInputEdit",
  initialState,
  reducers: {
    addInput: (state, action: PayloadAction<InputEditState>) => {
      return action.payload;
    },
    clearEditInput: () => {
      return { value: "", edit: 0 };
    },
  },
});

export const { addInput, clearEditInput } = TodosInputEditSlice.actions;
// grabs the store abd
export const selectTodosInputEdit = (state: RootState) => state.todosInputEdit;
export default TodosInputEditSlice.reducer;
