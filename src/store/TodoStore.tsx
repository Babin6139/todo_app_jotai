import {atom} from "jotai";

type TodoData={
    text:string,
    isdone:boolean,
    id:number
}
export const todosAtom=atom<TodoData[]>([]);