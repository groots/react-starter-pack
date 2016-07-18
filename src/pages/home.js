import React from "react";
import {Link} from "react-router";


import {Card} from "../components/card"
import {EntryBox} from "../components/entryBox"

export class Home extends React.Component{

  UserInfo = [
    {
      firstName: "Bob",
      LastName: "Coder"
    },
    {
      firstName: "Smith",
      LastName: "Gold"
    },
    {
      firstName: "tester",
      LastName: "Testerson"
    },

  ];

  Users(){
    let users = [];

    this.UserInfo.forEach((user) => {
      users.push(<Link to={`/Info/${user.firstName}`} > <Card firstName={user.firstName} LastName={user.LastName} /> </Link>);
    });
    return users;
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        {this.Users()}
        <div style={{marginTop: '150px'}}>
        <Card>
          <EntryBox />
        </Card>
        </div>
      </div>
    )
  }
}
