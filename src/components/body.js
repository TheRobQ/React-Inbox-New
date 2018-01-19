import React from 'react';

export default class Body extends React.Component{
   componentDidMount(){
    return this.props.updateRead(this.props.message, this.props.array)
  }
render(){
  return (
  <div className={`col-xs-11 col-xs-offset-1`}>
    {this.props.body}
  </div> )
}
}
