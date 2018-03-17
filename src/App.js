import React, { Component } from 'react';
import Input from './components/inputs';

class App extends Component {
  constructor(){
    super();
    this.state={
      input1: '',
      input2: '',
    };
  }
  inputChangeHandler = e => {
    this.setState({[e.target.id]: e.target.value});
  }

  render(){
    console.log(this.state);
    return(
      <section>
        <Input inputHandler={this.inputChangeHandler} />
      </section>
    );
  }
}
export default App;