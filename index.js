const parseText = text => {
    if (text.substring(0, 3) === '~!~')
        return text.substring(3, text.length) + ',';
    else
        return `'${text}',`;
};

const pressTab = (string, level) => {
    const lines = string.split('\n').map(line => {
        for (let i = 0; i < level; i++)
            line = '    ' + line;
        return line;
    });

    return lines.join('\n');
};
//function used to handle string, number, boolean, object(RegExp instance), null and undefined data types
const simpleTypes = item => {
    if(typeof item === 'string'){
        return parseText(item);
    } else if(typeof item === 'number' || typeof item === 'boolean' || item === null || item instanceof RegExp){
        return item + ',';
    }
    return false;
};

const handleArray = (array) => {
    let text = '';
    //loop in each array item
    for (let item of array) {

        if(simpleTypes(item)) {
            text += simpleTypes(item);

        //if is a deep array recall
        } else if (Array.isArray(item)) {
            text += `[${handleArray(item)}],`;

            //if is an object
        } else if (typeof item === 'object') {
            const string = c(item);
            //remove last comma
            text += string.substring(0, string.length - 1) + ',';
        }
    }

    return text;
};

const c = (object, level = 0) => {
    let text = '{\n';
    level++;

    for (let key of Object.keys(object)) {
        if(object[key] !== undefined) //ignore undefined values
            text += pressTab(`${key}: `, level);

        if(simpleTypes(object[key])) {
            text += simpleTypes(object[key]);

            //if is object {}
        }else if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
            text += c(object[key], level);

            //if is object array []
        } else if (Array.isArray(object[key])) {
            let arrayString = pressTab(handleArray(object[key]), level);

            arrayString = arrayString.split('\n');
            arrayString[0] = arrayString[0].trim();
            arrayString = arrayString.join('\n');

            text += `[${arrayString}],`;

            //if is function function(){...}
        } else if (typeof object[key] === 'function') {
            //replace <tab> with ' ' so the whitespaces will be preserved
            text += object[key].toString() + ',';
        }
        if(object[key] !== undefined) //ignore adding \n to undefined values
            text += '\n';
    }
    return text + pressTab('},', level - 1);
};


module.exports = object => {
    const result = c(object);
    return result.substring(0, result.length - 1);
};
