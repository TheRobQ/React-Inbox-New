import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Navbar from './components/Navbar'
import update from 'immutability-helper';
//var isToggleOn = false
class App extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.state = {
      messages: this.props.messages,
      isToggleOn: false
    }
   this.toggleRead = this.toggleRead.bind(this)
  }

  toggleRead() {
      if(this.state.isToggleOn === false){
      let array = this.state.messages.map(message => {message.selected = true; return message})
         this.setState(prevState => ({messages: array, isToggleOn: !prevState.isToggleOn}))
       //console.log(array);}
     }
       if(this.state.isToggleOn === true){
       let array = this.state.messages.map(message => {message.selected = false; return message})
        this.setState(prevState => ({messages: array, isToggleOn: !prevState.isToggleOn}))
        console.log(array);}
    }

  updateRead = (message, array) => {
    message.read = !message.read
    this.setState({messages: array})
  }

  onCheck = (message, array) => {
    message.selected = !message.selected
    this.setState({messages: array})
  }

  star = (message, array) =>{
    message.starred = !message.starred
    this.setState({messages: array})
  }


  render() {
      console.log(this.state.isToggleOn);
    return (<div className="App">
      <Navbar/>
      <Toolbar toggleRead={this.toggleRead} isToggleOn={this.state.isToggleOn} messages={this.state.messages} array={this.props.messages} checkAll = {this.checkAll}/>
      <MessageList messages={this.state.messages} updateRead={this.updateRead}  onCheck={this.onCheck}  star={this.star} checkAll = {this.checkAll}/>
    </div>);
  }
}

export default App;
// toggleRead() {
//     if(this.state.isToggleOn === false){
//     let array = this.state.messages.slice(0)
//     array.forEach(message => message.selected = true)
//      this.setState({messages: array, isToggleOn: true})
//      console.log(array);}
//      if(this.state.isToggleOn === true){
//      let array = this.state.messages.slice(0)
//      array.forEach(message => message.selected = false)
//       this.setState({messages: array, isToggleOn: false})
//       console.log(array);}
//   }
