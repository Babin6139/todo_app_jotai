import { useAtom } from "jotai"
import { todosAtom } from "../store/TodoStore"



const TodoList=()=>{
    const [todos,setTodos]=useAtom(todosAtom);
    return (
        <div>
            {todos.map((todo)=>(
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.isdone} />
                    <input value={todo.text} />
                    <button>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default TodoList;