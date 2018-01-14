import React from 'react';

const Toolbar = (props) => {

  var toggleAll = (e) => {
    //e.preventDefault()
    return props.toggleRead()
  }

  var markAsRead = (e) => {
    e.preventDefault()
    return props.read()
  }

  var markAsUnread = (e) => {
    e.preventDefault()
    return props.unread()
  }

  const check = () => {
    var counter = 0
    if (props.isToggleOn === false) {
      props.messages.map(message => {
        if (message.selected === true) {
          counter++
        }
        return message
      })
      if (counter > 0) {
        return "fa fa-minus-square-o"
      }
      return "fa fa-plus"
    }
    if (props.isToggleOn === true) {
      props.messages.map(message => {
        if (message.selected === false) {
          counter++
        }
        return message
      })
      if (counter > 0) {
        return "fa fa-minus-square-o"
      }
      return "fa fa-check-square-o"
    }
  }

  const updateNumber = () => {
    var number = props.counter();
    console.log(props)
    return number
  }

const apply = (event) =>{
  console.log(event.target.value);
  props.applyLabel(event.target.value)
}

const remove = (event) => {
  props.removeLabel(event.target.value)
}
  return (<div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">{updateNumber()}</span>
        unread messages
      </p>

      <a className="btn btn-danger">
        <i className="fa fa-plus"></i>
      </a>

      <button className="btn btn-default" onClick={toggleAll}>
        <i className={check()}></i>
      </button>

      <button className="btn btn-default" onClick={markAsRead}>Mark As Read</button>

      <button className="btn btn-default" onClick={markAsUnread}>Mark As Unread</button>

      <select className="form-control label-select" value="option.value" onChange={apply}>
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>
      
      <select className="form-control label-select" value="option.value" onChange={remove}>
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default">
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  </div>)
}

export default Toolbar
