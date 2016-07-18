import React from "react";



export class Card extends React.Component{


  render() {

    const cardStyle = {
      border: 'solid grey 1px',
      boxShadow: '5px 5px 5px #888888',
      display: 'inline-block',
      width: '250px',
      height: '150px',
      margin: '10px',
      padding: '10px'
    };

    return(
      <div style={cardStyle}>
          {this.props.firstName} {this.props.LastName}
          <div>
            {this.props.children}
          </div>
      </div>
    )
  }

}
