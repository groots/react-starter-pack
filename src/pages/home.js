import React from "react";
import {Link} from "react-router";
import {observer} from "mobx-react";


import {Card} from "../components/card"
import {EntryBox} from "../components/entryBox"

@observer
export class Home extends React.Component{

  AddUser(FirstName, Lastname){
    this.props.store.add(FirstName, Lastname);
  }

  Users(){
    let users = [];

    this.props.store.users.forEach((user, i) => {
      users.push(<Link key={i} to={`/Info/${user.firstName}`} > <Card key={i} firstName={user.firstName} LastName={user.lastName} /> </Link>);
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
