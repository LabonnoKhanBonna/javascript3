function add (a,b)
{
    if (typeof a != "number" || typeof b !='number'){
        return "please give me two numbers"
    }
    return a+b;
}

console.log(add(2,5))

function findsum(arr){
    if (!Array.isArray (arr)){
        return"please provide me an array"
    }
    let sum = 0;
    for (let i of arr){
        sum+=i
    }
    return sum;
}

const x = [1,2,3,4,5];
console.log(findsum([1,5,8]))



function findVowel(s){

    if (typeof s != "string"){
        return "please provide me a string "
    }

    let vowel = 0;
    let consonent = 0;
    let space = 0;
    for (let i = 0; i<s.length; i++){
        // a e i o u
        let char = s[i];
        if (char == 'a' || char == 'e' || char =='i' || char =='o' || char == 'u'){
            vowel++;
        }
        else if (char != " "){
            consonent++;
        }
        else{
            space++;
        }

    }

    const obj={
        vowelcount: vowel,
        consonent: consonent,
        space: space
    }
    return obj;
}

const sentence = "The name of our country is Bangladesh"
//const sentence = 504;
console.log(findVowel(sentence))
