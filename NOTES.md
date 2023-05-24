# Notes

## Description

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

---

## Domain
- input: integer
- output: integer
- it return the square of each digit of the input concatenated

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

TODO:

# Pomodoro 1 🍅:
- initial setup 
    - update README ✅
    - update NOTES ✅
    - update package.json 🚧
        - missing git repo update
    - update code/test files ✅
- domain discussion ✅
- it should have a function that will take an int input and return an array with the digits separated
    - input: 1 -> [1] ✅
    - input: 123 -> [1, 2, 3] ✅
- it should have a function that will take an array of ints as input and return an array of ints with each digit squared 
    - input: [1] -> [1] ✅
    - input: [1, 2, 3] -> [1, 4, 9] 🚧

# Pomodoro 2 🍅:
- it should have a function that will take an array of ints as input and return an array of ints with each digit squared 
    - input: [1] -> [1] ✅
    - input: [1, 2, 3] -> [1, 4, 9] ✅
- the main function should use both functions above to get the final array with an array of ints and concatenate them
    - input: 1 -> 1 ✅
    - input: 123 -> 149 ✅