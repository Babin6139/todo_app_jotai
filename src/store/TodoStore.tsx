import {atom} from "jotai";

export interface TodoData{
    text:string,
    isdone:boolean,
    id:number
}
export const todosAtom=atom<TodoData[]>([]);