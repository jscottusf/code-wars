// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {
    return string.split(" ").map(word => {
        if (word.includes("-")) {
            return word.split("-").map(str => {
                return encodeWord(str);
            }).join("-")
        }
        return encodeWord(word);
    }).join(" ");
}

const encodeWord = (word) => {
    if (word.length < 4 || word.length < 5 && word.includes(",")) {
        return word;
    }

    let codeWord = "";
    codeWord += word[0];
    codeWord += word.includes(",") ? word.length - 3 : word.length - 2;
    codeWord += word.includes(",") ? word[word.length - 2] + "," : word[word.length - 1];
    return codeWord;
}


//clean solution
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function cleanAbbreviate(string) {
  return string.replace(find, replace);
}

console.log(abbreviate("internationalization hello"));
console.log(abbreviate("accessibility"));
console.log(abbreviate("Accessibility"));
console.log(abbreviate("You need, need not want, to complete this code-wars mission"));