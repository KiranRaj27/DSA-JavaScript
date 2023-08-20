class Node {
  constructor() {
    this.value = null;
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

function insertEnd(head, x) {
  let temp = new Node();
  temp.setter(x);
  if (head === null) return temp;
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = temp;
  return head;
}

let head = null;
head = insertEnd(head, 10);
head = insertEnd(head, 20);
head = insertEnd(head, 30);
console.log(printlist(head));
