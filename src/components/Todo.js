import { useDispatch } from 'react-redux';
import styles from './Styles.module.css'
import { useState } from 'react';
import { addTodo } from '../store/todoSlice';
import TodoElement from './TodoElement';

const Todo = () => {
    const dispatch = useDispatch();
    
    const [todoText, setTodoText] = useState('');
 
    const handlerTodoText = (e) => {
        setTodoText(e.target.value);
    }

    const addNewTodo = () => {
        if(todoText === '')return;

        dispatch(addTodo(todoText))
        setTodoText('')
        }
    
    return ( 
        <div className='flex items-center flex-col h-screen'>
            <h1 className={styles.title}>todos</h1>
            <div className={ styles.container }>
                <input autoFocus={true} onKeyUp={e => e.key === 'Enter' && addNewTodo()} value={todoText} onChange={handlerTodoText} className={ styles.input }/>
                <button onClick={addNewTodo} className={styles.button }>Add</button>
            </div>           
                 <TodoElement dispatch={dispatch}/>
        </div>
     );
}

export default Todo;
