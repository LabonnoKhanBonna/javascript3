const person = {
    name : "labonno",
    age: 25,
    address : "Dhaka",
    phone:"01689763403"
}

// //dot notation
// console.log(person.age)
// console.log(person["phone"])

// const x = "address";
// console.log(person[x])

const keys  = Object.keys(person)
const values = Object.values(person)
// console.log(keys)
// console.log(values)

// for (let key of keys )
// {
//     console.log(person[key])
// }

// for (let i =0 ; i<keys; i++)
// {
//     console.log(person[keys[i]])
// }
// const person = {
//     name : "labonno",
//     age: 25,
//     address : "Dhaka",
//     phone:"01689763403"
// }

for (let i in person){
    console.log(i)
    console.log(person[i])
    console.log(typeof i,i)
}
