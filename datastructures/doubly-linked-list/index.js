class myClass {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = {
      value,
      next: null,
      prev: this.tail,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(newNode);
    return this;
  }
  prepend(value) {
    let newNode = {
      value,
      next: this.head,
      prev: null,
    };
    this.head = newNode;
    this.length++;
    return this;
  }
}

const linkedList = new myClass(5);
// linkedList.prepend(10);
// linkedList.append(15);
// linkedList.append(20);
// linkedList.insert(2, 25);
// linkedList.remove(3);
// // linkedList.reverse();
// linkedList.printList();
