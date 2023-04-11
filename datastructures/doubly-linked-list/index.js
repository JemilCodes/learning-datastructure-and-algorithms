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

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    if (index >= this.length) {
      const value = this.append(value);
      this.length++;
      return value;
    }
    let newNode = {
      value,
      next: null,
      prev: null,
    };
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    console.log(newNode);
    this.length++;
  }
  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next.next;
    delete leader.next;
    leader.prev = leader;
    leader.next = holdingPointer;
    this.length--;
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
