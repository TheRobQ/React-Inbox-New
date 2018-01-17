import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: ''
    };

    this.getSubject = this.getSubject.bind(this);
    this.getBody = this.getBody.bind(this);
    this.send = this.send.bind(this);
  }

//   hidden = () => {
//     //console.log(this.props.display);
//     if (this.props.display === true) {
//       return ''
//     }
//     if (this.props.display === false) {
//       return ''
//     }
//   }
// ${this.hidden()}
  getSubject = (event) => {
    this.setState({subject: event.target.value})
  }
  getBody = (event) => {
    this.setState({body: event.target.value})
  }

  send = (event) => {
    //event.preventDefault()
    let subject = this.state.subject
    let body = this.state.body
    //console.log(body);
    this.props.submit(subject, body)
  }
  render() {

    return (<form className={`form-horizontal well`}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" value={this.state.subject} onChange={this.getSubject}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control" value={this.state.body} onChange={this.getBody}></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <Link to="/" className="btn btn-primary" onClick={this.send}>
            Send
            {/* <input type="submit" value="Send" className="btn btn-primary" onClick={this.send}/> */}
          </Link>
        </div>
      </div>
    </form>)
  }
}
