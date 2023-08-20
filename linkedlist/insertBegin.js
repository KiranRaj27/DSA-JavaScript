class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
  setter(nodeValue) {
    this.data = nodeValue;
  }
}

function printlist(head) {
  let curr = head;
  let string = "";
  while (curr !== null) {
    string += curr.data + " ";
    curr = curr.next;
  }
  return string;
}

function insertBegin(head, x) {
  let temp = new Node();
  temp.setter(x);
  temp.next = head;
  return temp;
}

let head = null;
head = insertBegin(head, 30);
head = insertBegin(head, 20);
head = insertBegin(head, 10);
console.log(printlist(head));
