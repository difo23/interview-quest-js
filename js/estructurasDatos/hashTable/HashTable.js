class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		if (!key.length) return 0;
		return key.split('').reduce((acc, e) => {
			acc = (acc + e.charCodeAt(0) * key.indexOf(e)) % this.data.length;
			return acc;
		}, 0);
	}
	set(key, value) {
		const address = this._hash(key);
		if (!this.data[address]) this.data[address] = [];

		this.data[address].push([ key, value ]);
		return this.data;
	}

	get(key) {
		const address = this._hash(key);
		const bucket = this.data[address];
		if (bucket) {
			const value = bucket.find((b) => b[0] === key)[1];
			return value;
		}
		return undefined;
	}

	keys() {
		return this.data
			.filter((bucket) => bucket)
			.map((bucket) => {
				return bucket.map((b) => b[0])[0];
			});
    }
    
    values() {
		return this.data
			.filter((bucket) => bucket)
			.map((bucket) => {
				return bucket.map((b) => b[1])[0];
            });
	}
}

const myHashTable = new HashTable(50);

//const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));

console.log(JSON.stringify(myHashTable.values()));
