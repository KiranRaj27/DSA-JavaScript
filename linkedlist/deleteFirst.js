class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }

  setter(x) {
    this.data = x;
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

function delHead(head) {
  if (head === null) return null;
  else {
    let temp = head.next;
    delete head;
    return temp;
  }
}

let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
console.log(printlist(head));
head = delHead(head);
console.log(printlist(head));
