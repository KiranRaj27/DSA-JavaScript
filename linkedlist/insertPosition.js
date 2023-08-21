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

function insertPos(head, pos, data) {
  let curr = head;
  let temp = new Node();
  temp.setter(data);
  if (pos == 1) {
    temp.next = head;
    return temp;
  }
  for (let i = 1; i <= pos - 2 && curr !== null; i++) {
    curr = curr.next;
  }
  if (curr === null) {
    return head;
  }
  temp.next = curr.next;
  curr.next = temp;
  return head;
}

let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
head.next.next.next = new Node();
head.next.next.next.setter(40);
head.next.next.next.next = new Node();
head.next.next.next.next.setter(50);
console.log(printlist(head));
head = insertPos(head, 5, 45);
console.log(printlist(head));
