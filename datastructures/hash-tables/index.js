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
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return this.data[index];
  }
  get(key) {
    const index = this._hash(key);
    let currentBucket = this.data[index];
    if (!currentBucket) {
      return undefined;
    }
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
  }
}

const hashTable = new myClass(1);
hashTable.set("grapes", 1000);
hashTable.set("grapess", 10000);
console.log(hashTable.get("grapess"));
