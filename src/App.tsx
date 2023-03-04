import {atom,useAtom} from "jotai";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { todosAtom } from "./store/TodoStore";
import "./App.css";


export const App=()=>{
  const [todos]=useAtom(todosAtom);

  return (
    <div className="App">
          {todos.map((duty)=>(
            <TodoList key={duty.id} task={duty}/>
          ))}
          <TodoAdd/>
    </div>
  )
}