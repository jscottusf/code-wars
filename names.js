// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//Examples:

// list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// returns 'Bart, Lisa & Maggie'
// list([{ name: 'Bart' }, { name: 'Lisa' }])
// returns 'Bart & Lisa'
// list([{ name: 'Bart' }])
// returns 'Bart'
// list([])
// returns ''

function list(names) {
    let nameString = "";
    const nameCountMaxIndex = names.length - 1;

    if (names.length === 1) {
        return names[0].name;
    }

    names.map((name, index) => {
        if (index === nameCountMaxIndex) {
            nameString += `& ${name.name}`;
        } else if (index === nameCountMaxIndex - 1) {
            nameString += `${name.name} `;
        } else {
            nameString += `${name.name}, `;
        }
    });
    return nameString;
}

// super clear solution:
// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
// }

console.log(
    list([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Homer" },
        { name: "Marge" },
    ])
);

console.log(list([{ name: "Bart" }, { name: "Lisa" }]));

console.log(list([{ name: "Bart" }]));
