import { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/Todo.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from './features/todoSlice.js';

function App() {
 
  // const {todos, setTodos} = useTodoContext();
const [Search,setSearch]=useState("");
const dispatch=useDispatch();
const todos=useSelector((state)=>state.todos);

// Save to localStorage whenever todos change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);    //tobe edited

const handleSubmit=(e)=>{
  e.preventDefault();
  if(Search.trim()!==""){
    dispatch(addTodo(Search));
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
                            />
                        ))}
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default App
