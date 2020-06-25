
let leftNumber = 5;
let rightNumber = 10;

const isLower = (a, b) => {
    if (a < b) {
        console.log(true);
    } else {
        console.log(false)
    }
}
isLower(rightNumber, leftNumber);
//3.2

isLower(leftNumber, 10);

//3.3

const isDivisibleByTwo = (a) => {
    if (a % 2 === 0){
        console.log(`Le chiffre ${a} est un chiffre paire`)
    } else {
        console.log(`Le chiffre ${a} est un chiffre impaire`)
    }
}
isDivisibleByTwo(leftNumber);
isDivisibleByTwo(rightNumber);
