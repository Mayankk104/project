const utility = require('./folder/utility');

console.log('I am super happy :)');
console.log("natural number series")


console.log("natural number series.")
for(let i=0;i<5;i++){
    console.log(utility.increment(i))
}

console.log("whole number series.")
for(let i=0;i<5;i++){
    console.log(utility.increment(i-1))
}

console.log('double series.')
for(let i=1; i<5; i++){
    let num = 1;
    for(let j=0 ; j<i ; j++){
        num += num;
    }
    console.log(num);
}
