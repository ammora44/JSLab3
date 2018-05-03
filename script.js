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
    constructor () {
    this.contacts = [ 
        {name: "Bob", email: "bob@gmail.com", phone: 555-555-1212, relation: "cool dude"},
        {name: "Barbara", email: "barb@gmail.com", phone: 555-555-1212, relation: "sweet lady"}
    ];
     } 
    add(info) {
        let newContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(newContact);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
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
        } 
        console.log(info);                               
        addressBook.add(info);
    } else if (response === "delete") {
        let index = prompt("What index would you like to delete?");
        addressBook.deleteAt(index);
        console.log(AddressBook);
    } else if (response === "print") {
        for (let i = 0; i < addressBook.contacts.length; i++) {
            console.log(addressBook.contacts[i]); 
        }
    } else if ( response === "quit") {
     console.log("Good bye!");
     break;
    }
} 

































