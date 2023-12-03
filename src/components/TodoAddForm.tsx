import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { addTodo, editTodo } from "../features/todo/todoSlice";
import { StoreState } from "../store/store";
import { edit } from "../features/todo/inputSlice";

import styled from 'styled-components';


interface TodoAddFormProps {
}
const StyleInput = styled.input`
    font-size: 30px;
    margin-right: 15px;
    border-radius: 8px;
    border: 2px solid #7a7a7a;
    min-width: 80%;
    width: 10px
    `

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
        <div
            style={{
                width: '90%'
            }}>

            <form action="" onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                <StyleInput
                //  <input 
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleChangeInput}

                // />
                >
                </StyleInput>
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
