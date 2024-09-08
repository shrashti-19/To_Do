import { createContext,useContext} from "react";

export const ToDoContext = createContext({
   todos:[
    {
        id:1,
        todo:"Todo message",
        completed:false
    }
   ],
   addTodo :(todo) => {}, //functionality will be in app.jsx
   updateTodo :(id,todo) =>{},
   deleteTodo :(id) =>{},
   toggleComplete : (id) =>{}
})

export const  useTodo = () =>{
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider