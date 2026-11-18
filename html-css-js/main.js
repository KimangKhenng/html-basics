// Why write code?
// Make life easier

// What problem are we trying to solve?
// Convert Fahreni to Celcius
// WHat is the input?  A value as Number 

// Process? perform some calculation to convert to celcius

// Output? A value as Number in Celcuis 

function convertFatoC(fa) {
    // convert fa to celcius
    return (fa - 32) * 5 / 9;
}

const args = process.argv.slice(2);

let fa = args[0]
let celcius = convertFatoC(fa)
console.log(celcius)

// const person = {
//     name: "KKK",
//     age: 15
// }

// console.log(person["name"])

// const transcations = [
//     { date: "2025-01-12", description: "groceries", category: "food", accountId: "234235AFF", amount: 50 },
//     { date: "2025-02-03", description: "textbooks", category: "education", accountId: "7812BCDE", amount: 85 },
//     { date: "2025-03-19", description: "bus pass", category: "transportation", accountId: "234235AFF", amount: 30 },
//     { date: "2025-04-07", description: "movie ticket", category: "entertainment", accountId: "56AB9012", amount: 18 }
// ]

// console.log(transcations[2].description)

console.log(0.1 + 0.2 === 0.3)