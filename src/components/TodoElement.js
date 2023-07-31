import { useSelector } from 'react-redux';
import { compliteTodo, deleteTodo } from '../store/todoSlice';
import styles from './Styles.module.css'


const TodoElement = ({dispatch}) => {
   
    const todo = useSelector(state => state.todo.todos);

    const todoElement = todo.map((t) => {
        return <div className={t.complited? styles.complitedTodo :styles.todo} key={t.id}>
           <input onChange={() => dispatch(compliteTodo(t.id)) } type='checkbox' checked = {t.complited} 
           className={ styles.checkbox }/>
           {t.title}
           <span onClick={() => dispatch(deleteTodo(t.id))} className={ styles.closeBtn }>X</span>
        </div>
        
   })


    return (     
        <>
            {todoElement}
        </>              
   );
}
 
export default TodoElement;

