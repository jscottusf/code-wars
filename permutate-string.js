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