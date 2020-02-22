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
if(this.state.count < 20){
  this.setState({
    count: this.state.count + 1,

 })
}
}

decrement = () => {
  if(this.state.count > 0){
    this.setState({
      count: this.state.count - 1,
   })
  }
}
clear = () => {
  this.setState({
  count: 0,
})
}
doubleCount = () => {
  if(this.state.count < 20){
    this.setState({
      count: this.state.count + 2,
   })
  }
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
