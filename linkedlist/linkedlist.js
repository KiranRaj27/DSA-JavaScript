class Node {
  constructor() {
    this.data;
    this.next = null;
  }

  setter(x) {
    this.data = x;
  }
}

let head = new Node();
head.setter(10);
let temp1 = new Node();
temp1.setter(20);
let temp2 = new Node();
temp2.setter(30);
head.next = temp1;
temp1.next = temp2;
console.log(head.data + "-->" + temp1.data + "-->" + temp2.data);
