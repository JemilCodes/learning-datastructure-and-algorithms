class myClass {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}

const linkedList = new myClass(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
// linkedList.insert(2, 25);
// linkedList.remove(3);
linkedList.reverse()
linkedList.printList();
