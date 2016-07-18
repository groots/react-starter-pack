import React from "react";

import {Menu} from "../components/menu";


export class Layout extends React.Component{

  render() {
    return(
      <div>
      <Menu />
        {this.props.children}
      </div>
    )
  }

}
