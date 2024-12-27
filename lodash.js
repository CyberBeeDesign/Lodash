const _ = {
    
    //clamp()
    clamp (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(upper, lowerClampedValue);
    return clampedValue;
    },

    //range()
    inRange (number, start, end) {
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
    }
}

//console.log(_.clamp(12, -25, 36))
console.log(_.inRange(.10, 20, 30))








// Do not write or modify code below this line.
module.exports = _;