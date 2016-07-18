import React from "react";



export class Show extends React.Component{

  render() {
    return(
      <div>
        Show Info Page for {this.props.params.userName}
      </div>
    )
  }

}
