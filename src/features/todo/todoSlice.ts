import { createSlice } from "@reduxjs/toolkit";
import { TodosInterface } from "./todoType";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: TodosInterface = {
    todosType: [],
}

export const todoSlice = createSlice({
    name: 'todoApp',
    initialState,
    reducers: {
        addTodo: (state, { payload: { id, text } }) => {
            state.todosType.unshift({ id, text })
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todosType = state.todosType.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, { payload: { id, text } }) => {
            state.todosType = state.todosType.map(todo => todo.id === id ? {...todo, text: text} : todo)
        }
    }
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer;








