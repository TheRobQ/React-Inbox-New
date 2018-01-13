import React from 'react';
import Message from './Message'
//import update from 'immutability-helper';

export default class MessageList extends React.Component {

render() {
  const {messages, updateRead, onCheck, checked, star, checkAll} = this.props
  //console.log(this.props);
    return (<div>
      {messages.map(message => (<Message key={message.id} message={message} updateRead={updateRead} array={messages}  onCheck={onCheck} checked={checked} star={star} checkAll = {checkAll} />))}
    </div>)
  }
}
