import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.list = [];
  }

  //append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    this.list.push(newNode);
  }

  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    this.list.unshift(newNode);
  }

  //size returns the total number of nodes in the list
  //head returns the first node in the list
  //tail returns the last node in the list
  //at(index) returns the node at the given index
  //pop removes the last element from the list
  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  //find(value) returns the index of the node containing value, or null if not found.

  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.    The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let log = "";
    this.list.forEach((node) => {
      log += `(${node.value}) -> `;
    });
    log += "(null)";
    console.log(log);
  }
}

export default LinkedList;
