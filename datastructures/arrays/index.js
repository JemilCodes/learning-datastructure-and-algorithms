class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  shiftItem(index) {
    for (let i = index; i > this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  getItem(index) {
    return this.data[index];
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  delete(index) {
    this.shiftItem(index);
    return this.data[index];
  }
}

const newArray = new MyArray();
newArray.push("hello world");
newArray.getItem(0);
newArray.pop();
newArray.push("hello world2");
newArray.push("hello world3");
newArray.delete(1);
console.log(newArray.data);
