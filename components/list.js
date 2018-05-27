import React from 'react';
import ToDoItem from './todoItem';

const List = (props) =>{
  const todos = props.todos.map(todo => {
    return <ToDoItem key={todo.id} text={todo.text} />
  })

  return (
    <ul>
      {todos}
    </ul>
   )
  }

export default List