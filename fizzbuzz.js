const fizzBuzz = (number) => {
    for (var i = 0; i < number; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(100);