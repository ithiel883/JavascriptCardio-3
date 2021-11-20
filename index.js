// function addAll() {
//    var looper = arguments
//     let results = 0
//   for(let i = 0; i < looper.length; i++){
//       results += looper[i]
//   }
//   return results
// }

//Solution 2 - ...rest & reduce/forEach

// function addAll (...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur)

// }

// challenge 2: sum all primes
//pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number grater than 1 whose only factors are 1 and itself
//ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}
//challenge 3: seek and destroy
//remove from the array whatever is in the following arguments. Return the leftover values in an array
//ex. seekAndDestroy([2, 3, 4, 5, 6, 'hello'], 2, 6) == [, 4, 'hello]

//solution 1: arguments, indexOf, filter

// function seekAndDestroy(arr){
//     const args = Array.from(arguments);

//    function filterArr(arr){

//         //return true NOT in array
//         return args.indexOf(arr) === -1;
//    }

//    return arr.filter(filterArr)
// }

//Solution 2: ...rest, filter $ includes

// function seekAndDestroy(arr, ...rest) {
//     return arr.filter(val => !rest.includes(val))
// }

//challenge 4: sort by height
//some people are standing in a row in a park. There are trees between them which cannot be moved.
//your task is to rearrange the people by their heights in a non-descending order without moving the trees
//ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
//sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190 ]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

//challenge 5: missing letters
// find the missing letter in the passed letter range and return it. if all letters are present, return undefined
//ex.
//missingletters("abce") == "d"
//missingLetters("abcdefghjklmno") == "i"
//missingLetters("abcdefghijlkmnopqrstuvwxyz") == undefined

// function missingLetters(str) {
//     let compare  = str.charCodeAt(0);
//     let missing;

//     str.split("").map((char, i) => {
//         if(str.charCodeAt(i) === compare) {
//             ++compare
//         }else {
//             missing = String.fromCharCode(compare)
//         }
//     });

//     return missing
// }

function evenOddSums(arr) {
  //my solution
//   evenArr = [];
//   oddArr = [];
//   arr.forEach((item) =>
//     item % 2 === 0 ? evenArr.push(item) : oddArr.push(item)
//   );

//   let finalOdd = 0;
//   let finalEven = 0;

//   oddArr.forEach((item) => (finalOdd += item));
//   evenArr.forEach((item) => (finalEven += item));

//   let totalArr = [finalOdd, finalEven];
//   return totalArr;

  //brad's solution
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum]
}
console.log(evenOddSums([2, 3, 4, 5, 15, 4, 8, 3]));
