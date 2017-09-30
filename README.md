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
    function1: function(){
        for(let i=0; i<10; i++){
            console.log(i);
        }
    },
    function2: value => alert(value),
    call: "~!~alert('Hey!')",
    newClass: "~!~new String('Hey!')",
    bool: true,
    array: [1,2,3,4,"test", 5],
    array2: [1,2,3,4, { key1: "First key", key2: "Second key" }],
    regex: /\.css$/
};

const result = convert(obj);
console.log(result);
/*
"{
    function1: function (){
        for(let i=0; i<10; i++){
            console.log(i);
        }
    },
    function2: value => alert(value),
    call: alert('Hey!'),
    newClass: new String('Hey!'),
    bool: true,
    array: [1,2,3,4,'test',5,],
    array2: [1,2,3,4,{
        key1: 'First key',
        key2: 'Second key',
    },],
    regex: /\.css$/,
}"
*/
```
### Why would you use `object-plain-string` instead of `JSON.stringify`?
Well, it depends on what you want to achieve, for example if you want to write javascript config files you may want to use `object-plain-string` instead of `JSON.stringify`

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
}
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
