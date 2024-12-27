const _ = {
    
//clamp()
    clamp (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(upper, lowerClampedValue);
    return clampedValue;
    }
}

console.log(_.clamp(12, -25, 36))








// Do not write or modify code below this line.
module.exports = _;