import React from "react";
import FontAwesome from "react-fontawesome";


export class EntryBox extends React.Component{

  constructor(){
    super();
    this.state =  {
      mode: 'new'
    };
  }

  Toggle(){
    if (this.state.mode = 'new'){
      this.setState({mode: 'add'});
    }else{
      this.setState({mode: 'new'});
    }
  }

  render() {

    let mainArea;

    if(this.state.mode == 'new'){
      mainArea =  <div onClick={ ()=> this.Toggle() }><FontAwesome
                      name='plus-circle'
                      size='2x'
                      style={{color:'green'}}
                      /></div>
    }else{
      mainArea = <div> <input
        type="text"
        placeholder='First Name'
        value={this.state.value}
        onChange={this.handleChange}
      />
      <input
        type="text"
        placeholder='Last Name'
        value={this.state.value}
        onChange={this.handleChange}
      />
      </div>
    }

    return(
      <div>
        {mainArea}
      </div>
    )
  }

}
