import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleNewTodo = (todo) =>{

        const action = {
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
        //console.log({todo})
    }

    const handleDeleteTodo = (id) => {

        //console.log({id})
       dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {

        //console.log({id})
       dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

   


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo

    }

}
