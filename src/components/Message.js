import React from 'react';
//import update from 'immutability-helper';

export default class Message extends React.Component {
  message = this.props.message

  handleChange = (e) =>{
    console.log(this.message);
    return this.props.onCheck(this.props.message, this.props.array)
  }

  toggle = (e) => {
   e.preventDefault();
   return this.props.updateRead(this.props.message, this.props.array)
 }

 toggleStar = (e) => {
  //console.log(this.message.starred);
  e.preventDefault();
  return this.props.star(this.props.message, this.props.array)
}

 starChange = ()=>{
   if(this.message.starred === true){
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

  render() {

    return (
      <div className={`row message ${this.read()} ${this.yellow()}`} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onChange={this.handleChange} checked={this.check()} />
            </div>
            <div className="col-xs-2">
              <i className={this.starChange()} onClick={this.toggleStar}></i>
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
