import React, { Dispatch, Fragment, SetStateAction, useState } from "react"
import { TextField } from "@material-ui/core"
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Todo, TodoStatusEnum } from "../Models/models";
import { updateTodoHook } from "../Hooks/Hooks";
import { updateTodo } from "../Redux/todoReducer";

const EditTitleInputWrapper = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 12px;
    display; flex;
    justify-content: center;
    align-items: center
`;

const EditTitleInput = styled.input`
    background: none;
    height: 18px;
    margin: 0px 10px;
`;

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
    id: string | undefined;
    title: string;
    status: TodoStatusEnum;
    setEdit: Dispatcher<boolean>
  }

/**
 * Functional component that renders the input field when a user edits an item
 * 
 * @param id {string}, the id associated with the item that is being edited
 * @param title {string}, the title of the item that is being edited
 * @param status {TodoStatusEnum}, the status associated with the item that is being edited
 * @params setEdit {Dispatcher<boolean>}, function that sets the `edit` state within the parent `ToDoItem`
 * @returns {JSX.Element}
 */
const EditTodoTitle: React.FC<Props> = ({id, title, status, setEdit}) => {

    const [input, setInput] = useState(title)

    const dispatch = useDispatch();

    /**
     * Updates the title of an item within the database and the global state
     */
    const handleTitleSave = (): void => {
        const todoItem: Todo = {
            _id: id,
            title: input,
            status: status,
            lastUpdatedAt: Math.floor(Date.now() / 1000),
          };
          updateTodoHook(todoItem).then((data) => {
            if (data?.status !== 200) {
              console.error("There was an error updating the todo from the db");
            }
            dispatch(updateTodo(todoItem));
            setEdit(false);
          });
    }

    return (
        <Fragment>
            <EditTitleInputWrapper>
            <EditTitleInput type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleTitleSave}>Save</button>
            </EditTitleInputWrapper>
        </Fragment>
    )
}

export default EditTodoTitle;