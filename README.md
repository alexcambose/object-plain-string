[![Build Status via Travis CI](https://travis-ci.org/alexcambose/object-plain-string.svg?branch=master)](https://travis-ci.org/alexcambose/object-plain-string)

# object-plain-string
Convert javascript objects into strings

## Installation
```
npm i -S object-plain-string
```
[npm](https://www.npmjs.com/package/object-plain-string)

## Usage

```js
const convert = require('object-plain-string');

const obj = {
  key1: "Value for key1",
  key2: "Value for key2",
  key3: {
      key31: "Value for key31",
      key32: "Value for key32",
  }
};

const result = convert(obj);
console.log(result);
/*
"{
    key1: 'Value for key1',
    key2: 'Value for key2',
    key3: {
        key31: 'Value for key31',
        key32: 'Value for key32',
    },
},"
*/
```

```js
const convert = require('object-plain-string');
const obj = {
    key1: 'This is key1',
    key2: 'This is key2',
    integer: 123,
    boolean: true,
    array: [1,2,3,4],
    func: function (){
        //comment
        console.log('this is a function');
    },
    object: {
        deep1: 'This is deep1',
        deep2: 'This is deep2'
    },
    regex: /.css$/,
    _undefined: undefined,
    _null: null,
}

const result = convert(obj);
console.log(result);
/*
"{
    key1: 'This is key1',
    key2: 'This is key2',
    integer: 123,
    boolean: true,
    array: [1,2,3,4,],
    func: function (){
        //comment
        console.log('this is a function');
    },
    object: {
        deep1: 'This is deep1',
        deep2: 'This is deep2',
    },
    regex: /.css$/,
    _null: null,
}"
*/
```

`undefined` object key values will be ignored and `null` will be kept

```js
const obj = {
  undefinedValue: undefined,
  nullValue: null
};

const result = convert(obj);
console.log(result);
/*
"{
  nullValue: null,
}"
*/
```


### Why would you use `object-plain-string` instead of `JSON.stringify`?
Well, it depends on what you want to achieve, for example if you want to write javascript config files you may want to use `object-plain-string` instead of `JSON.stringify`.

#### `JSON.stringify` vs `object-plain-string`
```js
const convert = require('object-plain-string');

const obj = {
    a: 'Some text',
    b: ()=>{
        console.log('something');
    },
    c: [1,2,{a:'Something'},3,4]
};

console.log(JSON.stringify(obj));
/*
{
    "a":"Some text",
    "c":[1,2,{"key":"Something"},3,4]
}.

*/

console.log(convert(obj));
/*
"{
    a: 'Some text',
    b: ()=>{
        console.log('something');
    }
    c: [1,2,{
        key: 'Something',
    },3,4,],
},"

*/

```
