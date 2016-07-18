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

  handleChange(e){
    let oldState = this.state;
    oldState[e.target.id] = e.target.value;
    this.setState(oldState);
  }

  saveNew(e){
    this.props.onSave(this.state.FirstName, this.state.LastName );
  }

  render() {

    let mainArea;

    if(this.state.mode == 'new'){
       return(  <div onClick={ ()=> this.Toggle() }><FontAwesome
                      name='plus-circle'
                      size='2x'
                      style={{color:'green'}}
                      /></div>)
    }

    return(
      <div>
      <input
        type="text"
        id="FirstName"
        placeholder='First Name'
        value={this.state.FirstName}
        onChange={(e)=>this.handleChange(e)}
      />
      <input
        type="text"
        id="LastName"
        placeholder='Last Name'
        value={this.state.LastName}
        onChange={(e)=>this.handleChange(e)}
      />
      <div  onClick={() => this.saveNew()}>
        <FontAwesome
          name='floppy-o'
          size='2x'
          style={{color:'green'}}
        />
      </div>
      </div>
    )
  }

}
