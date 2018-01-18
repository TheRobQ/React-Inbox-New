import React from 'react';

const Body = (props) =>{
  console.log(props.body);
  return(
  <div className={`col-xs-11 col-xs-offset-1`}>
    {props.body}
  </div>)
}

export default Body
