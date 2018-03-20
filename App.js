import React, { Component } from 'react';
import Input from './components/inputs';
import Stateless from './components/stateless';
import P from './components/pureComponent';

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
        <Stateless x={5} y={6} />
        <P />
      </section>
    );
  }
}
export default App;
