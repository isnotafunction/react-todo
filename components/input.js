import React from 'react';
import List from './list'

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: '',
      id: 0 + Math.random(),
      completed: false,
      toDoArray: []
    }
  }

updateStateWithLocalStorage =() =>{
   if(localStorage.getItem('todo')){
     let value = JSON.parse(localStorage.getItem('todo'))
     this.setState({
       toDoArray: value
     })
   }
  }

updateLocalStorage = (arr) =>{
  localStorage.setItem("todo", JSON.stringify(arr))
}

componentDidMount(){
  this.updateStateWithLocalStorage()
}
 
handleSubmit = (e) => {
 e.preventDefault()
 if(!this.state.text.length){
   return;
 }

 const newToDo = {
   text: this.state.text,
   id: 0 + Math.random(),
   completed:false
  }

 let clonedToDoArray = JSON.parse(JSON.stringify(this.state.toDoArray))
 let updatedArray = clonedToDoArray.concat(newToDo)

 this.updateLocalStorage(updatedArray)

 this.setState((prevState)  => ({
   toDoArray: prevState.toDoArray.concat(newToDo),
   text: ''
 }))
  
}

handleDelete = (idToDelete) => {
 let clonedToDoArray = JSON.parse(JSON.stringify(this.state.toDoArray))
 const filteredToDoArray = clonedToDoArray.filter((item)=>{
  return item.id !== idToDelete
 })
 this.setState({
  toDoArray: filteredToDoArray,
})
this.updateLocalStorage(filteredToDoArray)
}

handleComplete = (idToComplete) => {
  const clonedToDoArray = JSON.parse(JSON.stringify(this.state.toDoArray))
  clonedToDoArray.forEach((item)=>{
    if(item.id === idToComplete ){
     item.completed = !item.completed;
    }
  })
  this.setState({
    toDoArray: clonedToDoArray
  })
  this.updateLocalStorage(clonedToDoArray)
}

render() {
  return (
    <React.Fragment>
    <div className="input">
    <form onSubmit={this.handleSubmit}>
     <label htmlFor="input-field"></label>
     <input 
       placeholder="...what do you want to do?"
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