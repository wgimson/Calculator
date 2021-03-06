import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import update from 'immutability-helper';

class App extends Component {
  constructor(){
    super()
    this.state = {operations: [] }
  }
  render() {
    return (
      <div className="App">
      <Display data={this.state.operations} />
        <Buttons>
          <Button onClick={e =>this.handleClick(e)} label="C" value="clear" />
          <Button onClick={e =>this.handleClick(e)} label="7" value="7" />
          <Button onClick={e =>this.handleClick(e)} label="4" value="4" />
          <Button onClick={e =>this.handleClick(e)} label="1" value="1" />
          <Button onClick={e =>this.handleClick(e)} label="0" value="0" />

          <Button onClick={e =>this.handleClick(e)} label="/" value="/" />
          <Button onClick={e =>this.handleClick(e)} label="8" value="8" />
          <Button onClick={e =>this.handleClick(e)} label="5" value="5" />
          <Button onClick={e =>this.handleClick(e)} label="2" value="2" />
          <Button onClick={e =>this.handleClick(e)} label="." value="." />

          <Button onClick={e =>this.handleClick(e)} label="x" value="*" />
          <Button onClick={e =>this.handleClick(e)} label="9" value="9" />
          <Button onClick={e =>this.handleClick(e)} label="6" value="6" />
          <Button onClick={e =>this.handleClick(e)} label="3" value="3" />
          <Button label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
        </Buttons>
      </div>
    );
  }
}
class Buttons extends Component{
  render(){
    return <div className="Buttons">{this.props.children}</div>
  }
}
class Button extends Component{
  render(){
    return(
    <div onClick={this.props.onClick}
         data-value = {this.props.value}
         data-size = {this.props.size}
         className="Button"
         >
          {this.props.label}
         </div>
    )
  }
}
class Display extends Component{
  render(){
    const displayString= this.props.data.join('')
    return <div className="Display" >{displayString}</div>
  }
  handleClick = e =>{
    const value = e.target.getAttribute('data-value')
    switch(value){
      case 'clear': 
      this.setState({
        operations: [],
      })
      break
      case 'equal': 
      this.calculateOperations()
      break
      default:
      const newOp = update(this.state.operations,{
        $push: [value],
      })
      this.setState({
        operations: newOp,
      })
      break
    }
  }
  calculateOperations = () =>{
    
  }
}
  export default App;
  