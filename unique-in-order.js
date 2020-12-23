// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value 
// next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {

    if (!Array.isArray(iterable)) {
        iterable = iterable.split("");
    }

    return iterable.filter((item, index) =>  {
        if (item !== iterable[index - 1]) {
            return item;
        }
    });
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,3]));
console.log(uniqueInOrder('ABBCcAD'))

//clear solution which i liked
function cleanUniqueInOrder(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}