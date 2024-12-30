const _ = {
    
    //clamp()
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(upper, lowerClampedValue);
    return clampedValue;
    },

    //range()
    inRange(number, start, end) {
        if(!end){
            end = start;
            start = 0;
        } 
        
        if (start > end){
            const temp = end;
            end = start;
            start = temp;
        }

        const isInRange = start <= number && number < end;
        return isInRange;
    },

    //words()
    words(string) {
        const words = string.split(' ');
        return words
    },

    //pad()
    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        const startPaddinglength = Math.floor((length - string.length)/2);
        const endPaddingLength = length - string.length - startPaddinglength;
        const paddedString = ' '.repeat(startPaddinglength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    //has()
    has(object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },

    //Invert()
    invert(object) {
        const invertedObject = {};
        for(let key in object) {
            const originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    //findKey()
    findKey(object, predicate) {
        for(let key in object) {
            const value = object [key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                return key;
            } 
        }
        return undefined
    },

    //drop()
    drop(array, n) {
        if(n === undefined) {
            n = 1;
        }
        const droppedArray = array.slice(n);
        return droppedArray;
    },

    //dropWhile()
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        })
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    //chunk()
    chunk(array, size) {
        if(size === undefined) {
            size = 1;
        }
        const arrayChunks = [];
        for (let i = 0; i < array.length; i += size){
            const arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
          }
          return arrayChunks;
    }
}


const object = {'Kamel': 1, "Alissya": 2, "Aylan": 3};
const predicate = (value) => array.indexOf(value) < array.indexOf('Saturday');
const array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
;

/*TEST*/

//console.log(_.clamp(12, -25, 36))
//console.log(_.inRange(.10, 20, 30))
//console.log(_.words('The quick brown fox jumps over the lazy dog.'));
//console.log(_.pad('Kamel', 35))
//console.log(_.has(object, 'Kamel'))
//console.log(_.invert(object))
//console.log(_.findKey(object, predicate))
//console.log(_.drop(array, 5));
//console.log(_.dropWhile(array, predicate));
//console.log(_.chunk(array, 3));








// Do not write or modify code below this line.
module.exports = _;