import React from "react";



export class Menu extends React.Component{

  render() {

    const main = {
      backgroundColor: 'lightblue',
      marginBottom: '10px',
      padding: '5px',
    }

    const item = {
      display: 'inline-block',
      padding: '10px'
    }

    return(
      <div style={main}>
        <ul>
          <li style={item}>one</li>
          <li style={item}>two</li>
          <li style={item}>three</li>
        </ul>
      </div>
    )
  }

}
