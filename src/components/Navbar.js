import React from 'react';
//import update from 'immutability-helper';

const Navbar = () => {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="https://galvanize-inbox-styleguide.herokuapp.com/#component-7">Inbox Styleguide</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="https://galvanize-inbox-styleguide.herokuapp.com/">Components</a></li>
            <li><a href="https://galvanize-inbox-styleguide.herokuapp.com/css">CSS</a></li>
            <li><a href="https://galvanize-inbox-styleguide.herokuapp.com/seeds">Seeds</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
