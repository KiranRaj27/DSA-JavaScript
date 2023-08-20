class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
  setter(nodeValue) {
    this.value = nodeValue;
  }
}

function printlist(head) {
  let curr = head;
  let string = " ";
  while (curr !== null) {
    string += curr.value + " ";
    curr = curr.next;
  }
  return string;
}

let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
head.next.next.next = new Node();
head.next.next.next.setter(40);
console.log(printlist(head));
