import React from "react";
import { useDispatch } from "react-redux";
import { TodoInterface } from "../features/todo/todoType";
import { deleteTodo } from "../features/todo/todoSlice";
import { edit } from "../features/todo/inputSlice";

import styled from 'styled-components';
import '../css.css'

interface TodoItemProps {
    todo: TodoInterface;
    index: number
}

const TodoItem: React.FC<TodoItemProps> = ({ todo,index }) => {
    const dispatch = useDispatch()

    const deleteTodoItem = () => {
        dispatch(deleteTodo(todo.id))
    }

    const editedTodoitem = () => {
        dispatch(edit({ text: todo.text, id: todo.id }))
        console.log("editedTodoitem: ", todo.text, todo.id)
    }


    return (
        <StyledItem >
            <h2 className="todo_text">{index}. {todo.text}</h2>
            <div className="btns">

                <button
                    className="del"
                    onClick={deleteTodoItem}>
                    удалить
                </button>

                <button
                    onClick={editedTodoitem}
                    >
                    Редактировать
                </button>
            </div>
        </StyledItem>
    )
}

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 5px 10px;
    transition: background-color 0.3s;
  
    &:hover {
      background-color: lightgray;
      cursor: pointer;
    }
  `;


export default TodoItem