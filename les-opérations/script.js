//Insérez ici les exercices 2.1 à 2.4


const square = (a) => {
    let result = a * a;
    console.log(result);
}

square(2);
square(4);
square(8);
square(16);


// Exercice 2.2


const isPair = (a) => {
    if(a % 2 === 0){
        console.log(`This number : ${a}, is divisible by 2`)
    }
}
isPair(3);
isPair(178);
isPair(65);
isPair(98);
isPair(123);

// Pour aller plus loin:
let isPairArray = [3, 18, 65, 98, 123];
isPairArray.forEach(element => 
    isPair(element));


// Exercice 2.3

const calculDiscount = (price, percent) => {
        let discount = price - (price * (percent/100));
        console.log(discount);
}
calculDiscount(79.99, 19);
// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition

let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;

// 2.4 

firstNumber /= 3;
console.log(firstNumber);
//2.5
secondNumber+= firstNumber;
console.log(secondNumber);
// 2.6

thirdNumber *= firstNumber;
console.log(thirdNumber);

//2.7

fourthNumber -= firstNumber
console.log(fourthNumber);
// Exercice incrémentation
let counter = 0

   function incrementOnClick() {
    document.getElementById('increment').addEventListener("click", () => {
            // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
            if(counter < 100){
                counter++
                console.log(counter)
            } else {
                console.log("Please, start decrementing")
            }
    })};
    incrementOnClick();
// Exercice incrémentation
    function decrementOnClick() {
        document.getElementById("decrement").addEventListener("click", () => {
             // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
             counter--
             console.log(counter);
     })};
     decrementOnClick();

/* let counter = 0
let incrementOnClick = () => {
    if(counter < 100){
        counter++
        console.log(counter)
    } else {
        console.log("Please, start decrementing")
    }
}
let decrementOnClick= () => {
    counter--
    console.log(counter)
}
 */
