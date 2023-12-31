import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './Todo';

const TodoList = ({todos, onTodoClick}) =>(
    <ul> 
        {todos.map(todo => 
         <ToDo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        )}
    </ul>
)

TodoList.propTypes ={
    todos : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed : PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired 
}

export default TodoList