import React from 'react'
import './todoItem.css';

const ToDoItem = ({key, text}) => {
  return (
   <li className="list__item" key={key}>
   <button className="button__complete"> v </button>
   <div>
   {text}
   </div>
   <button className="button__delete"> x </button>
   </li>
  )
}

export default ToDoItem