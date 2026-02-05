import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:JSON.parse(localStorage.getItem("todos")) || []
};





export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:nanoid(),
                text:action.payload,
                completed:false
            })
        },
        toggleTodo:(state,action)=>{
            const todo=state.todos.find(todo=>todo.id===action.payload);
            if(todo){
                todo.completed=!todo.completed;
            }
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload);
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload;
            const todo=state.todos.find(todo=>todo.id===id);
            if(todo){
                todo.text=text;
            }
        }
    }
});


export const {addTodo,toggleTodo,deleteTodo,updateTodo}=todoSlice.actions;

export default todoSlice.reducer;







