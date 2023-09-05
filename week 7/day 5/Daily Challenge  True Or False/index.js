// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false


x = 1
z = 2
y = 3
function unequal() {
    if (x !== z && y !== z && x !== y) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}
(unequal())