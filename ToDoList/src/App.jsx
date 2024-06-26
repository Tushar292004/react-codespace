import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'
import './App.css'
function App() {
  const [todos, setTodos] = useState([])

  // defining the functionality of addTodo function
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  //UpdateTodo Function defining 
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  //delete functionality
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((element) => element.id !== id))
  }

  //Update Toggle funcitonality
  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }


  //local storage code here 
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="main bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white  border-white border-2">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 ">Your Todo List</h1>
          <div className="mb-4 text-xl  border-white/30 border-2 rounded-lg">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
