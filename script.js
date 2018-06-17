"use strict";

class Contact { 
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook { 
  constructor() {
    this.contacts = [ 
      {name: "Bob", email: "bob@gmail.com", phone: 555-555-1211, relation: "cool dude"},
      {name: "Barbara", email: "barb@gmail.com", phone: 555-555-1212, relation: "sweet lady"},
      {name: "Mary", email: "mary@gmail.com", phone: 555-555-1213, relation: "sweet lady"},
      {name: "John", email: "john@gmail.com", phone: 555-555-1214, relation: "cool dude"},
      {name: "Jane", email: "jane@gmail.com", phone: 555-555-1215, relation: "sweet lady"}
    ];
  } 
  add(info) {
    let newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
    console.log(this.contacts);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
    console.log(this.contacts);
  }
  deleteByName(name) {
    this.contacts.splice(name, 1);
    console.log(this.contacts);
  }
  print() {
    console.log(this.contacts);
  }
}

let addressBook = new AddressBook();

while (true) {
  let response = prompt("Would you like to add, delete, print or quit?");
  if (response === "add") {
    let info = {
      name: prompt("Enter Contact Name"),
      email: prompt("Enter Contact Email"),
      phone: prompt("Enter Contact Phone Number"),
      relation: prompt("Enter Contact Relation"),
    }; 
    addressBook.add(info);
  } else if (response === "delete") {
    let deleted = prompt("Would you like to delete by name or index?");
    if (deleted === "name") {
      let name = prompt("Who would you like to delete?")
      for (let object in addressBook) {
        addressBook.deleteByName(name);
      }
    } else if (deleted === "index") {
     let index = prompt("Which index would you like to delete?");
      for (let i = 0; i < index; i++) {
       addressBook.deleteAt(index);
      }
    }
  } else if (response === "print") {
      addressBook.print();
  } else if ( response === "quit") {
    console.log("Good bye!");
    break;
  }
}































