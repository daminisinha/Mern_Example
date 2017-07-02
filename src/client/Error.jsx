import React from 'react';

export default class Error extends React.Component{
  render(){
    return(
      <div><span className="errorStyle">{this.props.message}</span>
      </div>
    )
  }
}
