import React from 'react';
import update from 'immutability-helper';

export default class Message extends React.Component {
  message = this.props.message

  handleChange = (e) =>{
    return this.props.onCheck(this.props.message, this.props.array)
  }
  toggle = (e) => {
   console.log(this.myDiv);
   e.preventDefault();
   return this.props.updateRead(this.props.message, this.props.array)
 }
 read = () => {
   if (this.props.message.read === true) {
     return 'read'
   }
   return 'unread'
 }
  check = () => {
    if (this.props.message.checked === true) {
      return "checked"
    }
    return ""
  }
  yellow = () => {
   if (this.props.message.checked) {
     return 'selected'
   }
   return 'none'
 }

  render() {
    //this.addLabel(this.message)

    return (
      <div className={`row message ${this.read()} ${this.yellow()}`} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onChange={this.handleChange} checked={this.check()} />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11" onClick={this.toggle}>
          {this.message.labels.map((ele,i)=> {
            return(
              <span key= {i} className="label label-warning">{ele}</span>
            )
          })}
          <a>
          {this.props.message.subject}
        </a>
      </div>
    </div>)
  }
}
