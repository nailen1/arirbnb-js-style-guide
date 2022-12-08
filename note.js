//3.2

const getKey = function getKeyForObject (key){
    return `a key named ${key}`;
}

const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')] : true
}

console.log(obj)
console.log(obj[`a key named enabled`])


//3.3

const atom = {
    value: 1,
    addValue(x){
        return atom.value + x;
    },
}

console.log(atom.addValue(10))

//3.4

const fullName = 'Luke Skywalker';
const age = '15';
const objj = {
    fullName,
    age,
}

console.log(objj)

//3.7

const has = Object.prototype.hasOwnProperty;

console.log(has.call(obj, 'age'))
console.log(Object.hasOwn(obj, 'id'))

//3.8

const original = {a:1, b:2};
const copy = {...original, c:3};
const {a, ...rest} = copy;
console.log(copy)
console.log(a)
console.log(rest)


