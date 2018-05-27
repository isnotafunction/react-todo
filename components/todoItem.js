import React from 'react'

const ToDoItem = (props) => {
  const key = props.key;
  const text = props.text;

  return (
   <li key={key}>{text}</li>
  )
}

export default ToDoItem