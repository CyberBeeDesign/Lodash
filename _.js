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

}




/*TEST*/

//console.log(_.clamp(12, -25, 36))
//console.log(_.inRange(.10, 20, 30))
//console.log(_.words('The quick brown fox jumps over the lazy dog.'));
//console.log(_.pad('Kamel', 35))








// Do not write or modify code below this line.
module.exports = _;