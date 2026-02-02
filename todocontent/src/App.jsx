import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTodoContext } from './contexts/TodoContext.jsx';
import Todo from './components/Todo.jsx';

function App() {
 
  const {todos, setTodos, handleToggle, handleDelete, handleUpdate} = useTodoContext();
const [Search,setSearch]=useState("");

// Save to localStorage whenever todos change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

const handleSubmit=(e)=>{
  e.preventDefault();
  if(Search.trim()!==""){
    const newTodo={
      id:Date.now(),
      text:Search,
      completed:false
    };
    setTodos([...todos,newTodo]);
    setSearch("");
  }
}

  return (
    <>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <form  className="flex"  
                        onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" 
            >
              
                Add 
            </button>
        </form>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <Todo 
                              key={todo.id} 
                              todo={todo} 
                              onToggle={handleToggle}
                              onDelete={handleDelete}
                              onUpdate={handleUpdate}
                            />
                        ))}
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default App
