// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(e) { return  e ? determineOperator(0, e) : 0 }
function one(e) { return  e ? determineOperator(1, e) : 1 }
function two(e) { return  e ? determineOperator(2, e) : 2 }
function three(e) { return  e ? determineOperator(3, e) : 3 }
function four(e) { return  e ? determineOperator(4, e) : 4 }
function five(e) { return  e ? determineOperator(5, e) : 5 }
function six(e) { return  e ? determineOperator(6, e) : 6 }
function seven(e) { return  e ? determineOperator(7, e) : 7 }
function eight(e) { return  e ? determineOperator(8, e) : 8 }
function nine(e) { return  e ? determineOperator(9, e) : 9 }

function plus(e) {return ['plus', e]}
function minus(e) {return ['minus', e]}
function times(e) {return ['times', e]}
function dividedBy(e) {return ['divide', e]}

const determineOperator = (num1, e) => {
    var operator = e[0];
    var num2 = e[1];

    switch(operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'times':
            return num1 * num2;
        case 'divide':
            return (num1 / num2) >> 0;
    }
}

console.log(one(plus(one())));