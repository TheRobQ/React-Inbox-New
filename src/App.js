import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Navbar from './components/Navbar'
import Compose from './components/Compose'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//import update from 'immutability-helper';

class App extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.state = {
      messages: [],
      isToggleOn: false,
      display: false,
      // subject: '',
      // body: ''
    }
    this.toggleRead = this.toggleRead.bind(this)
    this.read = this.read.bind(this)
    this.unread = this.unread.bind(this)
    this.counter = this.counter.bind(this)
    this.applyLabel = this.applyLabel.bind(this)
    this.removeLabel = this.removeLabel.bind(this)
    this.delete = this.delete.bind(this)
    this.expand = this.expand.bind(this)
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    //console.log(json._embedded.messages);
    this.setState({messages: json._embedded.messages})
  }

  submit = async (subject, body) => {
    let object={
      subject: subject,
      body: body
    }
    var response = await fetch('http://localhost:8082/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    var newMesage = await response.json()
    var array = [...this.state.messages, newMesage]
    console.log(response.json);
     this.setState(prevState => ({display: false, messages: array}))
  }

  expand = () =>{
    if(this.state.display === true){
     this.setState(prevState => ({display: false}))
   }
     if(this.state.display === false){
       this.setState({display: true})
     }
     //console.log(this.state.display);
  }

  delete = async () => {
    var array = []
    var indexes = []
    var object = {
      'messageIds': indexes,
      "command": "delete"
    }
    this.state.messages.map(message => {
      if (message.selected === false || message.selected === undefined) {
        array.push(message)
      }
      if (message.selected === true) {
        indexes.push(message.id)
      }
      return message
    })
    var response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    this.setState(prevState => ({messages: array}))
  }

  removeLabel = async (label) => {
    let indexes =[]
    var object = {
      'messageIds': indexes,
      "command": "removeLabel",
       "label": label
    }
    let array = this.state.messages.map(message => {
      if (message.selected === true) {
        message.labels.splice(message.labels.indexOf(label))
        indexes.push(message.id)
      }
      return message
    })
    var response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    this.setState(prevState => ({messages: array}))
  }

  applyLabel = async (label) => {
    let indexes =[]
    var object = {
      'messageIds': indexes,
      "command": "addLabel",
       "label": label
    }
    let array = this.state.messages.map(message => {
      if (message.selected === true) {
        message.labels.push(label)
        indexes.push(message.id)
      }
      return message
    })
    var response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    //console.log(label);
    this.setState(prevState => ({messages: array}))
  }

  counter() {
    let count = 0
    this.state.messages.map(message => {
      if (message.read === false) {
        count++
      }
      return message
    })
    //console.log(count);
    return count
  }

  toggleRead() {
    if (this.state.isToggleOn === false) {
      let array = this.state.messages.map(message => {
        message.selected = true;
        return message
      })
      this.setState(prevState => ({
        messages: array,
        isToggleOn: !prevState.isToggleOn
      }))
      //console.log(array);}
    }
    if (this.state.isToggleOn === true) {
      let array = this.state.messages.map(message => {
        message.selected = false;
        return message
      })
      this.setState(prevState => ({
        messages: array,
        isToggleOn: !prevState.isToggleOn
      }))
      // console.log(array);
    }
  }

  read = async () => {
    let indexes=[]
    const object = {
      'messageIds': indexes,
      "command": "read",
      "read": true
    }
    let array = this.state.messages.map( (message) => {
      if (message.selected === true) {
        message.read = true
        indexes.push(message.id)
      }
      return message
    })
    var read = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    this.setState( prevState => ({messages: array}))
  }

  unread = async () => {
    let indexes=[]
    const object = {
      'messageIds': indexes,
      "command": "read",
      "read": false
    }
    let array = this.state.messages.map(message => {
      if (message.selected === true) {
        message.read = false
        indexes.push(message.id)
      }
      //console.log(message)
      return message
    })
    var unread = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    this.setState( prevState => ({messages: array}))
  }

  updateRead = async (message, array) => {
    var object = {
      'messageIds': [message.id],
      "command": "read",
      "read": !message.read
    }
    message.read = !message.read
    var read = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    this.setState({messages: array})
  }

  onCheck = (message, array) => {
    message.selected = !message.selected
    this.setState({messages: array})
  }

  star = async (message, array) => {
    const object = {
      'messageIds': [message.id],
      "command": "star",
      "star": !message.starred
    }
    //console.log(obj);
    message.starred = !message.starred
    var response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    //console.log(response);
    this.setState({messages: array})
  }

  render() {
    //console.log(this.state.isToggleOn);
    //console.log(this.counter());
    return (<div className="App">
      <Navbar/>
      <Toolbar toggleRead={this.toggleRead} isToggleOn={this.state.isToggleOn} messages={this.state.messages} read={this.read} unread={this.unread} counter={this.counter} applyLabel={this.applyLabel} removeLabel={this.removeLabel} delete={this.delete} expand={this.expand} display={this.state.display}/>

      <Compose display={this.state.display} submit={this.submit} subject={this.state.subject} body={this.state.body}/>

      <MessageList messages={this.state.messages} updateRead={this.updateRead} onCheck={this.onCheck} star={this.star} checkAll={this.checkAll}/>
    </div>);
  }
}

export default App;
