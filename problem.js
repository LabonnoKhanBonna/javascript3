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

function information (info){
    const sentence = "amar nam " + info.name+ ", amar bari "+info.address +", amar boyosh " +info.age;
    console.log(sentence)
}

const myInfo ={
    name : "Labonno",
    age : 25,
    address: "Dhaka"
}
information(myInfo)