import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/TodoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('todos',)) || []  // Esta funcion inicializadora intenta parsear el contenido del 
}                                                            // localStorage para recuperar los todos. En caso de que sea nulo 
//                                                           // (primera vez montado o  simplemente sin nada) devuelve un array 
//                                                           // vacio al init.

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {                                       // Este efecto se ejecuta cada vez que haya un nuevo todo y lo 
      localStorage.setItem('todos', JSON.stringify(todos))  // almacena. En el caso de la primera renderizacion por el montaje
    }, [todos])                                             // del componente, todos es un arreglo vacio (por el initialState).
//                                                          // Por eso es necesario inicializar el state con los todos ya   
//                                                          // existentes en el localStorage para no perderlos. (F init)
    const handleNewTodo = (todo) => {
        dispatch({
            type: 'Add Todo',
            payload: todo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Delete Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }

    const todosCount = todos.length
    const pendingTodosCount = todos.filter((todo)=> todo.done === false ).length

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
