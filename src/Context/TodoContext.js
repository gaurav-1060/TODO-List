import { createContext ,useContext } from "react";

export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo :(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplet:(id)=>{}

})

export const TodoProvider= TodoContext.Provider

 const useTodo=()=>{
    return useContext(TodoContext)
}

export default useTodo;