import React from "react";
import TodoAddForm from "./TodoAddForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { StoreState } from "../store/store";

const TodoList = () => {
    const todos = useSelector((state: StoreState) => state.todo.todosType)
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                width: '100%'
            }}>
            <TodoAddForm
            />
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />)}
        </div>
    )
}

export default TodoList
