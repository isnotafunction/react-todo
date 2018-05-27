import React from 'react'
import './todoItem.css';

function ToDoItem (props){

    const removeItem = (idToDelete) =>{
    props.deleteItem(idToDelete)
  }

    const checkItem = (idToComplete) => {
    console.log(idToComplete)
    props.completeItem(idToComplete)
  }
  
    return (
      <li className='list__item' id={props.id} key={props.id}>
      <button className="button__complete" onClick={()=>checkItem(props.id)}> v </button>
      <div>
      {props.text}
      </div>
      <button className="button__delete" onClick={()=>removeItem(props.id)}> x </button>
      </li>
     )
}

export default ToDoItem