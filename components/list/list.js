import React from 'react';
import ToDoItem from '../todoItem/todoItem';
import './list.css'

const List = ({todos, deleteItem, completeItem}) =>{
  const todosArr = todos.reverse().map(todo => {
    return (
     <ToDoItem 
        key={todo.id} 
        id={todo.id} 
        text={todo.text} 
        listClassName = {todo.completed ? "list__item-complete" : ""}
        buttonClassName={todo.completed ? "button__completed-complete" : ""}
        deleteItem={deleteItem}
        completeItem={completeItem}
        />
    ) 
  })

  return (
    <ul>
      {todosArr}
    </ul>
   )
  }

export default List