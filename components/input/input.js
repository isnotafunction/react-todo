import React from 'react';
import List from '../list/list'
import './input.css'

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: '',
      id: 0,
      toDoArray: []
    }
  }
 
handleSubmit = (e) => {
 e.preventDefault()
 if(e.target.value === ""){
   return;
 }
 const toDo = {
   text: this.state.text,
   id: this.state.id
  }

 this.setState(prevState => ({
   toDoArray: prevState.toDoArray.concat(toDo),
   id: ++prevState.id,
   text: ''
 }))
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
    <List todos={this.state.toDoArray} />
    </React.Fragment>
  )
}

}

export default Input