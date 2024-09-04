import Node from "./Node.js";

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  //append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.tail) {
      const previousNode = this.tail;
      previousNode.nextNode = newNode;
      this._tail = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }
    this._length++;
  }

  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this._head) {
      const firstNode = this.head;
      newNode.nextNode = firstNode;
      this._head = newNode;
    } else {
      this._head = newNode;
    }
    this._length++;
  }

  //size returns the total number of nodes in the list
  get size() {
    return this._length;
  }

  //head returns the first node in the list
  get head() {
    return this._head;
  }

  //tail returns the last node in the list
  get tail() {
    return this._tail;
  }

  //at(index) returns the node at the given index
  at(index) {
    let count = 0;
    let node = this.head;
    while (count < index) {
      if (node.nextNode) {
        node = node.nextNode;
        count++;
      } else {
        return null;
      }
    }
    return node;
  }

  //pop removes the last element from the list
  pop() {
    if (this.size > 0) {
      const removedNode = this.at(this.size - 1);
      if (this.size === 1) {
        this._head = null;
        this._tail = null;
      } else {
        const newFinalNode = this.at(this.size - 2);
        newFinalNode.nextNode = null;
        this._tail = newFinalNode;
      }
      this._length--;
      return removedNode;
    }
  }

  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let count = 0;
    let node = this.head;
    while (count < this.size) {
      if (node.value === value) {
        return true;
      }
      if (node.nextNode) {
        node = node.nextNode;
        count++;
      } else {
        return false;
      }
    }
    return false;
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let count = 0;
    let node = this.head;
    while (count < this.size) {
      if (node.value === value) {
        return count;
      }
      if (node.nextNode) {
        node = node.nextNode;
        count++;
      } else {
        return null;
      }
    }
    return null;
  }

  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.    The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let log = "";
    let node = this.head;
    while (node != null) {
      log += `(${node.value}) -> `;
      if (node.nextNode) {
        node = node.nextNode;
      } else {
        node = null;
      }
    }

    log += "(null)";
    return log;
  }
}

export default LinkedList;
