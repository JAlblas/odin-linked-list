class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }

  setNextNode(node) {
    this.nextNode = node;
  }
}

export default Node;
