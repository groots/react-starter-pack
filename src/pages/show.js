import React from "react";
import {Link} from "react-router";


export class Show extends React.Component{

  render() {
    return(
      <div>
        <h1><Link to={`/`}> Back </Link></h1>
        Show Info Page for {this.props.params.userName}
      </div>
    )
  }

}
