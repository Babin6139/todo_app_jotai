import {atom,useAtom} from "jotai";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { todosAtom } from "./store/TodoStore";

const ageAtom=atom(25);

export const App=()=>{
  const [todos]=useAtom(todosAtom);

  return (
    <div className="App">
          {todos.map((duty)=>(
            <TodoList key={duty.id}/>
          ))}
          <TodoAdd/>
    </div>
  )
}