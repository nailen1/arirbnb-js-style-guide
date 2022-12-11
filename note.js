//3.2

const getKey = function getKeyForObject(key) {
    return `a key named ${key}`;
};

const obj = {
    id: 5,
    name: "San Francisco",
    [getKey("enabled")]: true,
};

console.log(obj);
console.log(obj[`a key named enabled`]);

//3.3

const atom = {
    value: 1,
    addValue(x) {
        return atom.value + x;
    },
};

console.log(atom.addValue(10));

//3.4

const fullName = "Luke Skywalker";
const age = "15";
const objj = {
    fullName,
    age,
};

console.log(objj);

//3.7

const has = Object.prototype.hasOwnProperty;

console.log(has.call(obj, "age"));
console.log(Object.hasOwn(obj, "id"));

//3.8

const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
const { a, ...rest } = copy;
console.log(copy);
console.log(a);
console.log(rest);

//4.3

const items = [1, 2, 3, 4, 5];
const itemsCopy = [...items];

console.log(itemsCopy);
console.log(items === itemsCopy);

//4.5

const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

const arr = Array.from(arrLike);
console.log(arr);

//4.6

const arrr = [1, 2, 3, 4, 5];
const double = function doublesNumber(x, i) {
    return x * i;
};

const arrr2 = arrr.map(double);
console.log(arrr2);

const arrr3 = Array.from(arrr, (x) => x * x);
console.log(arrr3);

//4.7

const arrrr = [
    [0, 1],
    [2, 3],
    [4, 5],
];
const concater = arrrr.reduce((acc, curr, index) => {
    console.log(index);
    return acc.concat(curr);
});

console.log(concater);

const inbox = [
    {
        subject: "MockingBird",
        author: "Harper Lee",
    },
    {
        subject: "Sherlock Holmes",
        author: "Conan",
    },
    {
        subject: "3 Generations",
        author: "Yum Sang Seop",
    },
];

// console.log(inbox)

const inboxFiltered = inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === "MockingBird") {
        return true;
    }
    return false;
});

console.log(inboxFiltered);

const arrrrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = arrrrr.filter((x) => {
    if (x % 2 === 0) return x === x;
    return false;
});

console.log(even);

const inboxMapped = inbox.map((msg) => {
    const { subject, author } = msg;
    if (subject === "MockingBird") {
        return author;
    }
    return false;
});

console.log(inboxMapped);

// !!!! undef elimination

let inboxSorted = inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === "MockingBird") {
        return true;
    }
    return false;
}).map(msg => msg.author);

console.log(inboxSorted);

//5.1

function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

function getFullName2(userObj) {
    const { firstName, lastName } = userObj;
    return `${firstName} ${lastName}`;
}

function getFullName3({ firstName, ...rest }) {
    return `${rest.lastName}`;
}


const user = {
    firstName: 'Danny',
    middleName: 'Young',
    lastName: 'Park'
}

console.log(getFullName(user));
console.log(getFullName2(user));


//5.2

const aarr = [1, 2, 3, 4];

const [first, second] = aarr;

console.log(first)

//5.3

const inputArr = [10, 20, 30, 40];

function processInput(input) {
    // let left = input[0];
    // let right = input[1];
    // let top = input[2];
    // let bottom = input[3];
    // return [left, right, top, bottom];
    return input
}

const [l, __, t] = processInput(inputArr)

console.log(l, t)

function processInput2(input) {
    let left = input[0];
    let right = input[1];
    let top = input[2];
    let bottom = input[3];
    return { left, right, top, bottom }
}

const { right, top } = processInput2(inputArr)

console.log(processInput2(inputArr))
console.log(right)

function concatenateAll(...args) {
    return args.join('')
    // return args
}

console.log(concatenateAll(10, 20, 30, 40, 50))

//8.4

console.log([1, 2, 3].map((x) => x * x))

//9.3 !!!!!!!!

class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }
}

const luke = new Jedi();

console.log(luke.jump().setHeight(20));


// 13.4

function checkName(hasName) {
    if (hasName === 'test') {
        return false;
    }

    const name = getName();

    if (name === 'test') {
        this.setName('');
        return false;
    }

    return name;
}

// 15.6 !!!!!!!!!!

let maybe1 = 1;
let maybe2 = 2;
let maybeNull = null;

const foo = maybe1 > maybe2 ? 'bar' : maybeNull;

console.log(foo)

let aa = undefined;
let bb = 'b';

const fooo = aa || bb;

console.log(fooo)

let cc = 1;
const bar = cc ? true : false;

// if x exists, !!x = true. EXISTENTIAL OPERATOR
const barr = !!cc;
console.log(bar)
console.log(barr)


let baz = cc ? false : true;
let bazz = !cc

console.log(baz)
console.log(bazz)

// if x exists, x ?? y returns y. 
let quux = aa ?? bb;
console.log(quux)

// 20.2 Additional trailing comma: Yup. eslint: comma-dangle

// Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the trailing comma problem in legacy browsers.


// good - git diff with trailing comma
const hero = {
    firstName: 'Florence',
    lastName: 'Nightingale',
    inventorOf: ['coxcomb chart', 'modern nursing'],
};

// good (note that a comma must not appear after a "rest" element)
// createHero(
//     firstName,
//     lastName,
//     inventorOf,
//     ...heroArgs
// );


let x = 'Jeonga'

if (!!x) {
    console.log(x)
}

console.log(!!x)


// 22.3

const inputValue = '4';

const vall1 = Number(inputValue);

const vall2 = parseInt(inputValue, 10);

console.log(vall1, vall2)

const inputValue2 = '1111';
const vall3 = parseInt(inputValue2, 2)
console.log(vall3)


const inputValue3 = 'EF';
console.log(parseInt(inputValue3, 16))

// 23.6

// export default function fortyTwo() { return 42; }

// 24.3

// 24.3 If the property/method is a boolean, use isVal() or hasVal().

// bad
// if (!dragon.age()) {
//   return false;
// }

// good
// if (!dragon.hasAge()) {
//   return false;
// }

