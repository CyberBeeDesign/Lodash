## Lodash Challenge

In this project, you will be recreating some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.
We’ve selected ten methods for you to implement and, in implementing each method, you will follow these four steps:

 - Specify the functionality of the method we are implementing
 - Ideate a game plan for how to implement this functionality in code
 - Implement our game plan
 - Test our code to ensure it works as expected

### Implement _.clamp()

#### Specify 
The first method we will implement is .clamp(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

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
To test that our .clamp() method works as expected, run the test file for this method in your terminal. Don’t worry if any errors appear, work through them one by one until your code runs as expected.

Once all of the tests are passing, congratulate yourself! You’ve implemented the first method of this project!

