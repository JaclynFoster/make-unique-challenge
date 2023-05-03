// Write your solution below:
// Write a function to remove all duplicate letters from a provided string. 
// The string will only contain lowercase letters between a - z.
//  The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

const removeDuplicate = (str) => {
let newStr = ""
let strArr = str.replace(/[^a-z]/gi, '').toLowerCase().split("")
console.log("starting with strArr: ", strArr)
for (let i = 0; i < strArr.length; i++) {
    let letter = strArr[i]
    console.log("Letter", letter, " i ", i)
    if(strArr.indexOf(letter) !== strArr.lastIndexOf(letter)) {// if the current index is the last one
        strArr.splice(i, 1)
        console.log('strArr', strArr)
         newStr = strArr.join().trim();
         i = 0
    }
    
}
return newStr
}

//can de-duplicate with an object. Objects are uniquely keyed and will not duplicate
const removeDup = (str) => {
    let obj = {};
    let newStr = ""
    let strArr = str.replace(/[^a-z]/gi, '').toLowerCase().split("")
    strArr.forEach(element => obj[element] = "");
    newStr = Object.keys(obj).join("");
    return newStr;
}

// console.log(removeDuplicate("%@ 8Hellooooo"))
//console.log(removeDup("%@ 8Hellooooo"))

//De-Duplicate using reduce. Reduce use accumulator and current value and will return a string

const removeDup3 = (str) => {
    let newStr = ""
    let strArr = str.replace(/[^a-z]/gi, '').toLowerCase().split("") 
    return strArr.reduce((acc, cur) => {
      if(!acc.includes(cur)) {
        newStr = acc += cur
        return newStr
      } else {
        return acc
      }

    }, "")
}
console.log(removeDup3("%@ 8Hellooooo"))