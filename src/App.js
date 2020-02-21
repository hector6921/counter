import React, {Component} from 'react';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
    };
  }
// this is where all the methods go
increment = () => {
  this.setState({

    if (this.state.count <= 20 && this.state.count >= 0) {
    count: this.state.count + 1,
  }
  })
}
decrement = () => {
  this.setState({
    if(this.state.count <= 20 && this.state.count){
    count: this.state.count - 1,
  }
  })
}
clear = () => {
  this.setState({
    count: 0,
  }
  })
}
doubleCount = () => {
  this.setState({
    if(this.state.count <= 20 && this.state.count) {
    count: this.state.count + 2,
  }
  })
}

  render(){
    return(
      <div className = "container">
      <div className = "navbar">Counter</div>
      <div className = "counter">
        <h1>{this.state.count}</h1>
          <button type= "button" onClick={this.clear}>Clear</button>
        <button type="button" onClick={this.increment}>Increment</button>
        <button type= "button" onClick={this.decrement}>Decrement</button>
        <button type= "button" onClick={this.doubleCount}>Double Count</button>
      </div>
      </div>
    )
  }
}
export default Counter;
