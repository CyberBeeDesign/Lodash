## Lodash Challenge

In this project, you will be recreating some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.
We’ve selected ten methods for you to implement and, in implementing each method, you will follow these four steps:

 - Specify the functionality of the method we are implementing
 - Ideate a game plan for how to implement this functionality in code
 - Implement our game plan
 - Test our code to ensure it works as expected

###  1 - Implement _.clamp()

#### Specify 

 - .clamp() takes three arguments: a number, a lower bound, and an upper bound.
 - .clamp() modifies the provided number to be within the two provided bounds.
 - If the provided number is smaller than the lower bound, it will return the lower bound as the final number.
 - If the number is larger than the upper bound, it will return the upper bound as the final number.
 - If the number is already within the two bounds, it will return the number as the final number.

#### Ideate 
There are a number of different ways to implement this method. One that might have come to your mind would be to use control flow to compare the current value to the bounds and return the proper result. We are going to present a different solution in these steps so that you can keep considering unexpected ways to solve problems.

 - Add the .clamp() method to the lodash object including the appropriate parameters.
 - Use Math.max() to clamp the number by the lower bound. The return value of Math.max() called with the number and the lower bound will be the larger of the two values, meaning it will be clamped by the lower bound.
 - Use Math.min() to clamp the number by the upper bound. The return value of Math.min() is called with the value from the step above` and the upper bound will be the smaller of the two.
 - Return the final value of these two operations, which will be the clamped number.

#### Implement
Let’s implement our game plan in code.

 - Add a method to our _ object called clamp.
 - Add three parameters to this method: number, lower, and upper.
 - Within the method, create a variable called lowerClampedValue that is set equal to the return value of Math.max() called with number and lower.
 - Create a variable called clampedValue that is set equal to the return value of Math.min() called with lowerClampedValue and upper.
 - Return clampedValue as our final value from the method.

#### Test
To test that our .clamp() method works as expected, run the test file for this method in your terminal.

### 2 - Implement _.inRange()

#### Specify 
Here is a summary of the method:

 - .inRange() takes three arguments: a number, a start value, and an end value.
 - .inRange() checks to see if the provided number falls within the range specified by the start and end values.
 - If the provided number is smaller than the start value, .inRange() will return false.
 - If the provided number is larger than or equal to the end value, .inRange() will return false.
 - If the provided number is within the start and end values, .inRange() will return true.
 - If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value.
 - If the provided start value is larger than the provided end value, the two values should be swapped.

#### Ideate

 - Add the .inRange() method to the lodash object.
 - Check to see if the end value is undefined. If so, set the end value equal to the start value and then set the start value equal to 0.
 - Check to see if the start value is larger than the end value. If so, swap the two values. Note that we will need to use a temporary variable to do this. To understand why, imagine if we tried to swap values without one. We might start by setting the end value equal to the start value. When we then go to set the start value equal to the end value, the end value will have already been overwritten and the swap can’t be completed. To solve this, we create a variable that will temporarily store the end value to access when we need to set the new start value and complete the swap.
 - Using boolean operators, find out if the number is in the specified range.
 - Return the value of the previous operation from the method.

#### Implement

 - Add a method to our _ object called inRange.
 - Add three parameters to this method: number, start, and end.
 - Within the method, create an if statement that checks to see if end is undefined.
 - Within the if statement block, set end equal to start. Then set start equal to 0.
 - After the previous if statement, add another if statement. This if statement should check whether start is bigger than end.
 - Within the if statement block, swap the two start and end values. Create a variable called temp that is set to the current end value. Then set end equal to start. Finally, set start equal to temp.
 - After our second if statement, create a variable called isInRange and set it equal to a boolean expression that checks if start is smaller than or equal to number and if number is smaller than end.
 - Finally, return the value of isInRange from the method.

#### Test
To test that our .inRange() method works as expected, run node test/in-range.js in your terminal.

### Implement _.words()

#### Specify 

 - .words() takes one argument: a string.
 - .words() splits the string into an array of words.
 - A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next.
 - Note: You may have noticed in the documentation that this function has a pattern parameter. Your method does not need to accept the additional pattern parameter, we will only split our string into words based on spaces.

#### Ideate 
This solution probably has the most potential solutions of the methods we have implemented thus far. We’ve opted to use a built-in JavaScript method to make this method as short and readable as possible.

 - Add the .words() method to the lodash object including the appropriate parameters.
 - Use the string .split() method to split the provided string on space characters into an array of words.
 - Return the array of words generated in the previous step.
 - Once you have tried implementing this game plan in code, move on to the next step to see how we do it.

#### Implement 
Let’s implement our game plan in code.

 - Add a method to our _ object called words.
 - Add one parameter to this method: string.
 - Within the method, create a variable called words and set its value equal to string split on space characters ' ' using the .split() method.
 - Return the value of words from the method.
 - Once you’ve finished implementing this method, save your code and move on to the next step to test it.

#### Test 
To test that our .words() method works as expected, run node test/words.js in your terminal.

### Implement _.pad().

#### Specify
Here is a summary of what your method should do:

 - .pad() takes two arguments: a string and a length.
 - .pad() adds spaces evenly to both sides of the string to make it reach the desired length.
 - Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length.
 - Your method does not need to accept the additional chars parameter; we will only add space characters to pad our string.
When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.

#### Ideate
 - Add the .pad() method to the lodash object including the appropriate parameters.
 - Check to make sure the target length is longer than the current string length. If not, return the unpadded version of the string.
 - Find the amount of padding to add to the start of the string by finding the difference between the target length and the string length, dividing by two, and rounding down the resulting number. We round down so that any uneven padding gets added to the end of the string, not the beginning, as specified in the instructions.
 - Find the amount of padding to add to the end of the string by subtracting the string length and the starting padding length (calculated above) from the target length.
 - Generate the padded string by adding the amount of starting padding and ending padding calculated above to each side of the current string.
 - Return the padded version of the string.


#### Implement
Let’s implement our game plan in code.

 - Add a method to our _ object called pad.
 - Add two parameters to this method: string and length.
 - Within the method, add an if statement that checks if length is shorter than or equal to string‘s length. If so, return string.
 - Create a variable called startPaddingLength and set its value equal to the difference of length and string‘s length, divided by 2, and rounded down by using Math.floor().
 - Create a variable called endPaddingLength and set its value equal to length minus string‘s length minus startPaddingLength.
 - Create a new variable called paddedString and set its value equal to the space character, ' ', repeated startPaddingLength number of times (using the string .repeat() method), concatenated with string, concatenated with the space character repeated endPaddingLength number of times.
 - Return the value of paddedString from the method.

#### Test 
To test that our .pad() method works as expected, run node test/pad.js in your terminal. 
