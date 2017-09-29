# object-plain-string
Convert javascript objects into strings

## Installation
```
npm i -S object-plain-string
```
[npm]()

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

## Why would you want to convert an js object in plain string ?


`JSON.stringify`
```js
const obj = {
  
};
```
