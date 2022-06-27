class Copier {

    constructor(obj) {
        if (typeof obj === null) {
            this.src = null;
        } else {
            this.src = obj;
        }
    }

    get() {
        let temp = this.src
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve(), 1000)
        }).then(function() {
            return temp;
        });
    }

    delete() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve(), 2000)
        }).then(function() {
            return Error('Cannot delete!')
        });
    }

    copy() {
        return JSON.parse(JSON.stringify(this.src));
    }
}

let test1 = new Copier('a');
let test2 = test1.copy();

let test3 = new Copier({ a: 'b', c: { d: 'e', f: ['g', { h: 'i' }] } });
let test4 = test3.copy();

let test5 = new Copier();

// First Test Case
console.log(test1);
console.log(test1.get());
console.log(test1.delete());
console.log(test1 === test2);
console.log(test2);

console.log("=======");

// Second Test Case
console.log(test3);
console.log(test3.get());
console.log(test3.delete());
console.log(test3 === test4);
console.log(test4);

console.log("=======");

// Third Test Case
console.log(test5);
