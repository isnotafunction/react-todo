import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/input'

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
      <div>To do list</div>
      <Input />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.root'))