const utility = require('./folder/utility');

console.log("natural number series.")
for(let i=0;i<5;i++){
    console.log(utility.increment(i))
}
console.log('...')

console.log("whole number series.")
for(let i=0;i<5;i++){
    console.log(utility.increment(i-1))
}
console.log('...')