import React from 'react'

function ToDoItem (props){

    const removeItem = (idToDelete) =>{
    props.deleteItem(idToDelete)
  }

    const checkItem = (idToComplete) => {
    console.log(idToComplete)
    props.completeItem(idToComplete)
  }
  
    return (
      <li className={`list__item ${props.listClassName}`}id={props.id} key={props.id}>
      <button className={`button__complete ${props.buttonClassName}`} onClick={()=>checkItem(props.id)}> </button>
      <div>
      {props.text}
      </div>
      <button className="button__delete" onClick={()=>removeItem(props.id)}> x </button>
      </li>
     )
}

export default ToDoItem