//1.1

const helloWorldStr = "Hello world";
console.log("Hello World");

//1.2

const myNameIsStr = "Bonjour je m'apelle";
const myNameIs = "Julie"
console.log(`${myNameIsStr} ${myNameIs}`);

//1.3

const ageStr = ["j'ai", "ans"];
const age = 30;
console.log(`${ageStr[0]} ${age} ${ageStr[1]}`);

//1.4 & 1.5
const siriusTeamArray = ["Jeremy", "Laetitia", "David", "Vincent", "Chris", "Gregory", "Julie"];
console.log(siriusTeamArray[6]);

let myIndex= siriusTeamArray.findIndex(element => element === "Julie");
console.log(siriusTeamArray[myIndex]);

//1.6 & 1.7

const prof = {
    name: "Vanderbyse",
    firstname: "Julie",
    age: 30
}
console.log(prof);
console.log(prof.firstname);