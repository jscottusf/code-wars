// In this kata you have to create all permutations of an input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
  let result = [];

  const stringArray = string.split("");

  const permute = (array, m = []) => {
      if (array.length === 0) {
          result.push(m);
      } else {
          for (let i = 0; i < array.length; i++) {
              let current = array.slice();
              let next = current.splice(i, 1);
              permute(current.slice(), m.concat(next))
          }
      }
  }

  permute(stringArray);

  let joinedIntoStrings = [];
  result.forEach(res => {
      if (joinedIntoStrings.indexOf(res.join("")) === -1) {
        joinedIntoStrings.push(res.join(""));
      }
  })

  return joinedIntoStrings;
}

console.log(permutations('abcd'))