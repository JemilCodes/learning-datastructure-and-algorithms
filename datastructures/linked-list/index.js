class myClass {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    let newNode = {
      value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }
}

const linkedList = new myClass(5);
linkedList.prepend(10)
// linkedList.append(15);
// linkedList.append(20);
// linkedList.insert(2, 25);
// linkedList.remove(3);
// linkedList.reverse()
// linkedList.printList();
