// import {createContext, useContext, useState} from 'react';



// export const TodoContext=createContext();



// export const useTodoContext=()=>useContext(TodoContext);


// export const TodoProvider=({children})=>{
    
//        const [todos,setTodos]=useState(
//            localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
//          );
//        const handleToggle = (id) => {
//   setTodos(todos.map(todo =>     // Toggle the completed status of the todo with the given id
//     todo.id === id ? {...todo, completed: !todo.completed} : todo
//   ));
// };

// const handleDelete = (id) => {
//   setTodos(todos.filter(todo => todo.id !== id));  // Remove the todo with the given id
// };

// const handleUpdate = (id, newText) => {
//   setTodos(todos.map(todo =>         // Update the text of the todo with the given id
//     todo.id === id ? {...todo, text: newText} : todo
//   ));
// };

        

//     return(

//         <TodoContext.Provider value={{todos,handleToggle,handleDelete,handleUpdate,setTodos}}>
//             {children}
//         </TodoContext.Provider>
//     )
// }




