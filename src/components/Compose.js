import React from 'react'

export default class Compose extends React.Component {
  value = ''
  hidden = () =>{
      console.log(this.props.display);
      if(this.props.display === true){
        return ''
      }
      if(this.props.display === false){
        return 'hidden'
      }
  }

  send = (event) =>{
    event.preventDefault()
     console.log(event.target.value);
    this.props.submit()
  }
  render() {

      return (<form className={`form-horizontal well ${this.hidden()}`}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" className="form-control" value={this.value}></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary" onClick={this.send}/>
        </div>
      </div>
    </form>)
  }
}
