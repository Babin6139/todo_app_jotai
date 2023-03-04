import React, {useState} from "react";
import { todosAtom } from "../store/TodoStore";
import { useAtom } from "jotai";

const TodoAdd=()=>{

    //state to store the input value
    const [value,setValue]=useState("");
    const [,setTodos]=useAtom(todosAtom);
    //we can avoid the first unused parameter with comma

    //Function to handle change
    const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }

    //function to handle adding todos by clicking the add button
    const handleAdd=()=>{
        if(value){
            setTodos((prevTodos)=>[
                ...prevTodos,
                {
                    text:value,
                    isdone:false,
                    id:Date.now()
                }
            ]);
            setValue("");
        }
    }
    return (
        <div>
            <input placeholder="New todo"  type="text" value={value} onChange={onChange} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default TodoAdd;