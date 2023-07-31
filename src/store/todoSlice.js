import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    status: null,
    error: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                complited: false, 
                title: action.payload, 
                id: new Date().toISOString()
            });
        },
        compliteTodo: (state, action) => {
            const complitedTask = state.todos.find(t => t.id === action.payload);
            complitedTask.complited = !complitedTask.complited;
        },
        deleteTodo: (state, action) => {
               state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
})

export const { addTodo, compliteTodo, deleteTodo, } = todoSlice.actions;

export default todoSlice.reducer; 