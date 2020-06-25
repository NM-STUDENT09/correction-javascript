// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
let zeroToHundredArray = [];
for (i = 0; i <= 100; i++){
    zeroToHundredArray.push(i)
}
console.log(zeroToHundredArray);
// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"
zeroToHundredArray.forEach(element => {
     if(element % 3 === 0 && element % 5 === 0){
        console.log("FizzBuzz");
    } else if (element % 3 === 0){
        console.log("Fizz");
    } else if (element % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(element);
    }
     
})
// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020
let monthsArray = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"] 
let spookyFridayArray = [];
for (month= 0; month < 12; month++){
    let date = new Date (2020, month, 13);
    if(date.getDay() === 5){
       spookyFridayArray.push(monthsArray[date.getMonth()]);
    }
}
console.log(spookyFridayArray);