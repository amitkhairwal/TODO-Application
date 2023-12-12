import React from 'react';
import List from './List'
import AddTodo from '../containers/AddTodo'
import VisibleToDoList from '../containers/VisibleToDoList';
import UndoRedo from '../containers/UndoRedo';

const App = () =>{
    return(
    <div>
        <AddTodo/>
        <VisibleToDoList/>
        <List/>
        <UndoRedo/>
    </div>)
}

export default App