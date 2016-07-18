import React from "react";
import {Link} from "react-router";


import {Card} from "../components/card"
import {EntryBox} from "../components/entryBox"

export class Home extends React.Component{
  constructor(){
    super();

    this.state =
    {
      UserInfo: [
        {
          FirstName: "Bob",
          LastName: "Coder"
        },
        {
          FirstName: "Smith",
          LastName: "Gold"
        },
        {
          FirstName: "tester",
          LastName: "Testerson"
        }
      ]
    };

  }

  AddUser(FirstName, Lastname){
    let newArray = this.state.UserInfo;
    newArray.push({FirstName: FirstName, Lastname: Lastname});
    this.setState({UserInfo: newArray});
  }

  Users(){
    let users = [];

    this.state.UserInfo.forEach((user) => {
      users.push(<Link to={`/Info/${user.FirstName}`} > <Card firstName={user.FirstName} LastName={user.LastName} /> </Link>);
    });

    return users;
  }

  render() {

    return(
      <div style={{textAlign: 'center'}}>
        {this.Users()}
        <div style={{marginTop: '150px'}}>
        <Card>
          <EntryBox onSave={(first, last) => this.AddUser(first, last)}/>
        </Card>
        </div>
      </div>
    )
  }
}
