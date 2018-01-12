import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Navbar from './components/Navbar'
import update from 'immutability-helper';

class App extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.state = {
      messages: this.props.messages,
    }
  }

  updateRead = (message, array) => {
    message.read = !message.read
    this.setState({messages: array})
  }

  onCheck = (message, array) => {
    message.checked = !message.checked
    this.setState({messages: array})
  }



  render() {
    return (<div className="App">
      <Navbar/>
      <Toolbar/>
      <MessageList messages={this.state.messages} updateRead={this.updateRead}  onCheck={this.onCheck} check={this.check}/>
    </div>);
  }
}

export default App;
