// function sumOfArray (arr)
// {
//   let sum = 0;

//     for (let item of arr){
//         sum = sum + item;
//     }
//     //console.log(sum)
//     return sum;
// }

// const nums = [1,2,3,4,5]
// sumOfArray(nums);
// const total = sumOfArray(nums)
// console.log(total)

function sumofodds(arr)
{
    let sum = 0;

    for (let item of arr){
        if (item%2 == 1){
            sum = sum + item
        }
    }

    return sum;
}

const numbers = [1,2,3,4,5,6,7,8,9];
const total = sumofodds(numbers)
console.log(total)

// amar nam , amr bari amar boyosh

// function information (info){
//     const sentence = "amar nam " + info.name+ ", amar bari "+info.address +", amar boyosh " +info.age;
//     console.log(sentence)
// }

// const myInfo ={
//     name : "Labonno",
//     age : 25,
//     address: "Dhaka"
// }
// information(myInfo)


// const number = 6;
// let result = 1;
// for (let i = number; i>=1; i--)
// {
//     result = result*i;   
// }

// console.log(result)

// function factorial (number){
//     if (number ==0 || number == 1){
//         return 1;
//     }
 
//     let result = 1;
//     for (let i = number; i>= 1; i--){
//         result = result * i;
//     }

//     return result;

// }

// console.log(factorial(5))
// console.log(factorial(0))

// // find the largest number from an array

// function findlargest(x){

//    let largest = x[0];
   
//     for (let i = 1; i<x.length; i++){

//         const currentItem = x[i]

//         if (currentItem > largest){
//             largest = currentItem
//         }
//     }
//     return largest;
// }



// const arr = [5,12,7,9,20,4,2,3];
// findlargest(arr)
// console.log(findlargest(arr))

function biggestFriend(friends){

    let biggest = friends[0];

    for (let i =1; i<friends.length; i++)
    {
        if (friends[i].length > biggest.length){
            biggest = friends[i]
        }
    }
    
return biggest
}


const friends = ["Rini" ,"reyana", "Nipa", "Rifat", "amit", "sakib", "nibir", "tanjila"];
console.log(biggestFriend(friends))