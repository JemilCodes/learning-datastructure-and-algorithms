class myClass {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const index = this._hash(key);
    this.data[index] = [key, value];
    return this.data[index];
  }
  get(key) {
    const index = this._hash(key);
    return this.data[index];
  }
}

const hashTable = new myClass(50);
hashTable.set("grapes", 1000);
hashTable.set("yams", 100000);
console.log(hashTable.get("yams"));
