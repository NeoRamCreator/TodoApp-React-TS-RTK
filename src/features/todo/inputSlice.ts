import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoInterface } from "./todoType";
export const inputState: TodoInterface = {
    id: 0,
    text: ""
}
export const inputSlice = createSlice({
    name: 'input',
    initialState: inputState,
    reducers: {
        edit: (state, { payload: { id, text} }) => {
            state.id = id
            state.text = text
            console.log('state.id' , state.id)
            console.log('state.text ', state.text)
        }
    }
})
export const { edit } = inputSlice.actions;
export default inputSlice.reducer;