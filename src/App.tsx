import {atom,useAtom} from "jotai";

const ageAtom=atom(25);

export const App=()=>{
  const [age,setAge]=useAtom(ageAtom);

  return (
    <div>
      <h1>This age is {age}</h1>
      <button onClick={()=>setAge((original)=>original+1)}>Click me</button>
    </div>
  )
}