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
