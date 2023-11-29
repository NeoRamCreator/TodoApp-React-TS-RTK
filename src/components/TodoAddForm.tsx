import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { addTodo, editTodo } from "../features/todo/todoSlice";
import { StoreState } from "../store/store";
import { edit } from "../features/todo/inputSlice";

interface TodoAddFormProps {
}


const TodoAddForm: React.FC<TodoAddFormProps> = ({ }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const inputText = useSelector((state: StoreState) => state.input)

    useEffect(() => {
        console.log("useEffect_inputText: ", inputText.text, inputText.id)
        if (inputText.text) {
            setInputValue(inputText.text)
        }
    }, [inputText])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('handleSubmit ',)

        e.preventDefault()
        if (inputText.text !== '') {
            console.log('if (inputText.text !== ')
            console.log('inputText.itemTodo ', inputText.id)
            console.log('inputText.inputTypeI ', inputText.text)
            dispatch(editTodo({
                id: inputText.id,
                text: inputValue
            }))
        }
        else {
            console.log('else { ',)
            if (inputValue.trim() !== "" && inputText.text === '') {
                console.log('if (inputValue.trim() !== "" && inputText.text === ',)

                dispatch(addTodo({
                    id: Date.now(),
                    text: inputValue
                }))
            }
        }
        setInputValue('')
        dispatch(edit({ text: '', id: '' }))
    }


    return (

        <div>
            <form action="" onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    alignItems: 'center',
                }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleChangeInput}
                    style={{
                        fontSize: "30px",
                        marginRight: 15,
                        borderRadius: '8px',
                        border: '2px solid #7a7a7a'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "5px 10px",
                    }}
                >{inputText.text ? 'Изменить' : 'Добавить'}</button>
            </form>
        </div>
    )
}
export default TodoAddForm
