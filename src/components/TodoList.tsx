import { useAtom } from "jotai"
import React from "react";
import { todosAtom } from "../store/TodoStore"
import { TodoData } from "../store/TodoStore";


const TodoList=(prop:{task:TodoData})=>{
    const [todos,setTodos]=useAtom(todosAtom);
    const task=prop.task;
    const index=todos.findIndex((listTasks)=>listTasks===task);
    //function to update task
    const updateTask=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const newTodoList=updateItemAtIndex(todos,index,{
            ...task,text:e.target.value
        });
        setTodos(newTodoList);
    }

    //Function to mark completion of task
    const toggleDone=()=>{
        const newTodoList=updateItemAtIndex(todos,index,{
            ...task,
            isdone:!task.isdone
        });
        setTodos(newTodoList);
    }

    //Function to remove a task
    const deleteItem=()=>{
        const newTodoList=removeItemAtIndex(todos,index);
        setTodos(newTodoList);
    }

    
    return (
        <div>
           <input type="text" value={task.text} onChange={updateTask} />
           <input type="checkbox"  checked={task.isdone} onChange={toggleDone} />
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

//Function to add an element in an array
const updateItemAtIndex=(arr:TodoData[],index:number,newValue:TodoData):TodoData[]=>{
    return [...arr.slice(0,index),newValue,...arr.slice(index+1)];
};

//Function to remove an element from an array
const removeItemAtIndex=(arr:TodoData[],index:number):TodoData[]=>{
    return [...arr.slice(0,index),...arr.slice(index+1)];
}

export default TodoList;