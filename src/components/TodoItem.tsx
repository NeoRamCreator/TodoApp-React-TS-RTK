import React from "react";
import { useDispatch } from "react-redux";
import { TodoInterface } from "../features/todo/todoType";
import { deleteTodo } from "../features/todo/todoSlice";
import { edit } from "../features/todo/inputSlice";

interface TodoItemProps {
    todo: TodoInterface;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, }) => {
    const dispatch = useDispatch()

    const deleteTodoItem = () => {
        dispatch(deleteTodo(todo.id))
    }

    const editedTodoitem = () => {
        dispatch(edit({ text: todo.text, id: todo.id }))
        console.log("editedTodoitem: ", todo.text, todo.id)
    }

    return (
        <div style={{ display: 'flex', alignItems: "center", width: '100%', justifyContent: 'space-between', }}>
            <h2>{todo.text}</h2>
            <div>

                <button style={{
                    padding: "5px 10px",
                    margin: "10px 0",
                    marginRight: 5,

                }}
                    onClick={deleteTodoItem}
                >
                    удалить
                </button>

                <button
                    onClick={editedTodoitem}
                    style={{ padding: "5px 10px", margin: "10px 0" }}>
                    Редактировать
                </button>
            </div>
        </div>
    )
}

export default TodoItem