import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Body from './body'
//import update from 'immutability-helper';

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.state = {
      body: "" }
    }
  message = this.props.message;

  async componentDidMount(){
    var response = await fetch(`http://localhost:8082/api/messages/${this.props.message.id}`)
    var json = await response.json();
    this.setState({body: json.body})
  }

  bodyMe = async (message) => {
    var response = await fetch(`http://localhost:8082/api/messages/${this.props.message.id}`)
    var json = await response.json()
    this.setState(prevState => ({body: json.body}))
  }

  handleChange = (e) => {
    return this.props.onCheck(this.props.message, this.props.array)
  }

  toggle = () => {
    return this.props.updateRead(this.props.message, this.props.array)
  }

  toggleStar = (e) => {
    //console.log(this.message.starred);
    e.preventDefault();
    return this.props.star(this.props.message, this.props.array)
  }

  starChange = () => {
    if (this.message.starred === true) {
      return "star fa fa-star"
    }
    return "star fa fa-star-o"
  }
  read = () => {
    if (this.message.read === true) {
      return 'read'
    }
    return 'unread'
  }
  check = () => {
    if (this.message.selected === true) {
      return "checked"
    }
    return ""
  }
  yellow = () => {
    if (this.message.selected) {
      return 'selected'
    }
    return 'none'
  }
  bigClick = (e) =>{
    this.bodyMe(this.props.message);
    this.toggle()
  }
  renderMe = (message) =>{
        return this.props.updateRead(this.props.message, this.props.array)
  }

  render() {
    return (<div className={`row message ${this.read()} ${this.yellow()}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" onChange={this.handleChange} checked={this.check()}/>
          </div>
          <div className="col-xs-2">
            <i className={this.starChange()} onClick={this.toggleStar}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11" onClick={this.bigClick}>
        {
          this.message.labels.map((ele, i) => {
            return (<span key={i} className="label label-warning">{ele}</span>)
          })
        }
        {/* <span onClick={this.toggle}> */}
        <Link to={`/messages/${this.props.message.id}`}  value={this.props.message.id}>
          {this.props.message.subject}
        </Link>
        <Route path={`/messages/${this.props.message.id}`} render={() => (
          <Body body={this.state.body} message={this.message} renderMe={this.renderMe}/> )}/>
      </div>
    </div>)
  }
}
