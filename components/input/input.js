import React from 'react';
import List from '../list/list'
import './input.css'

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: '',
      id: 0,
      completed: false,
      toDoArray: []
    }
  }
 
handleSubmit = (e) => {
 e.preventDefault()
 if(!this.state.text.length){
   return;
 }
 const toDo = {
   text: this.state.text,
   id: this.state.id,
   completed:false
  }

 this.setState(prevState => ({
   toDoArray: prevState.toDoArray.concat(toDo),
   id: ++prevState.id,
   completed:false,
   text: ''
 }))
 console.log(this.state.toDoArray)
}

handleDelete = (idToDelete) => {
 const clonedToDoArray = JSON.parse(JSON.stringify(this.state.toDoArray))
 const filteredToDoArray = clonedToDoArray.filter((item)=>{
  return item.id !== idToDelete
 })
 this.setState({
  toDoArray: filteredToDoArray,
})
}

handleComplete = (idToComplete) => {
  const clonedToDoArray = JSON.parse(JSON.stringify(this.state.toDoArray))
  clonedToDoArray.forEach((item)=>{
    if(item.id === idToComplete ){
     item.completed = true;
    }
  })
  console.log(clonedToDoArray)
  this.setState({
    toDoArray: clonedToDoArray
  })
}

render() {
  return (
    <React.Fragment>
    <div className="input">
    <form onSubmit={this.handleSubmit}>
     <label htmlFor="input-field">What do you want to do?</label>
     <input 
       id="input-field"
       value={this.state.text} 
       onChange={e => this.setState({text: e.target.value})} 
      />
    
    <button className="add"> + </button>
  
    </form>
    </div>
    <List 
    todos={this.state.toDoArray} 
    deleteItem={this.handleDelete} 
    completeItem={this.handleComplete}
    />
    </React.Fragment>
  )
}

}

export default Input