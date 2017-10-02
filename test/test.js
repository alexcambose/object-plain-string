const assert = require('chai').expect;
const convert = require('../index');


describe('Object', ()=>{
    it('all data types inside object key values', ()=>{
        assert(convert({
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
        })).to.equal(`{
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
}`);
    });
});
