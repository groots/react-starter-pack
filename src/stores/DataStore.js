import {observable} from "mobx";

export class DataStore {
  @observable users = [];

  constructor() {
    // start with some default data
    this.users.push(new User("bob", "guy"), new User("tester", "McTesterson"));
  }

  add(firstName, lastName) {
    this.users.push(new User(firstName, lastName));
  }
}


class User {
  @observable firstName;
  @observable lastName;

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
