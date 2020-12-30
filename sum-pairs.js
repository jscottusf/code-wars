
//this is inefficient
function sumPairs(ints, s) {

    let one;
    let two;

    for (var i = 0; i < ints.length; i++) {
        for (var j = 0; j < ints.length; j++) {
            if (i !== j) {
                if (ints[i] + ints[j] === s) {
                    one = ints[i];
                    two = ints[j];
                    break;
                }
            }
        }
    }

    return one ? [one, two] : undefined;
}

const sum_pairs = (ints, s) => {
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
  }

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([4, -2, 3, 3, 4], 8));
console.log(sumPairs([0, 2, 0], 0));
console.log(sumPairs([5, 9, 13, -3], 10));