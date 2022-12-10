


// // first

// function expressionMatter(a, b, c) {
//     let output = [];
//     output.push(a *(b + c));
//     output.push(a * b * c);
//     output.push(a + b * c);
//     output.push((a + b) * c);
//     output.push(a+b+c);
//       return Math.max(...output);
//   }



// //   second



// var FilterString = function(value) {
//     return parseInt(value.replace(/[^\d]/g, ""))
//   }


// // third
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
// }


// // fouth
// function isLeapYear(duration, year) {
//   return duration * year % 1 === 0;
// }

// // fifth
// const solution = (start, finish, difference = finish - start) =>
//   Math.floor(difference / 3) + difference % 3


// // sixth

// function uniqueInOrder(it) {
//   var result = []
//   var last
  
//   for (var i = 0; i < it.length; i++) {
//     if (it[i] !== last) {
//       result.push(last = it[i])
//     }
//   }
  
//   return result
// }

// // seventh

// var uniqueInOrder = function(iterable) {
//   var arr = [];
//   for (var i=0;i<iterable.length;i++) {

//   // check if there is back to back letter
//   if (iterable[i] !== iterable[i+1]) {

//       // if not, push the current value to arr
//     arr.push(iterable[i]);
//   }
// }
// return arr;
// }

// // eight

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//   if(dolphin){
//     sharkSpeed /= 2;
//   }
//   return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
// }

// // nine 

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// // ten 

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
// console.log("keys of ob:")
// showObjectKeys(ob);
// console.log("values of ob:")
// showObjectValues(ob);

// // eleven 

// function giveMeFive(obj){
//   var five=[];
//   for (var key in obj) {
//     if (key.length==5) five.push(key);
//     if (obj[key].length==5) five.push(obj[key]);
//   }
//   return five;
// }

// // twelve

// function pickIt (arr) {
  
//   let odd = []
//   let even =[]
      
//   for (var x of arr) {
//       ((x % 2) ? odd : even).push(x)    
//   }
      
//   return [odd, even]
// }

// // thirteen

// function sortDict(dict){
//   return Object.keys(dict)
//     .map(function(v){ return [+v || v, dict[v]] })
//     .sort(function(a, b){ return a[1] < b[1] });
// }

// // fourteen

// function powersOfTwo(n){
//   var result = [];
//   for (var i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }


// //  fiveteen 


// function sortDict(dict){
//   return Object.keys(dict)
//     .map(function(v){ return [+v || v, dict[v]] })
//     .sort(function(a, b){ return a[1] < b[1] });
// }


// // sixteen 


// reverse = function(array) {
//   var newArr = [];
//   for (var i = array.length-1; i>=0; i--){
//     newArr.push(array[i]);
//   }
//   return newArr;
//   }

//   // Seventeen

//   function duckDuckGoose(players, goose) {
  
//     return players[(goose-1)%players.length].name
//   }

//   // eighteen

//   function first(arr, n=1) {
//     return arr.slice(0,n);
//  }

// //  nineteen

// const oddCount = n => Math.floor(n/2) ;

// // twenty

// function _if(bool, func1, func2) {
//   return bool ? func1() : func2();
// }

// //  twenty one 

// function nthSmallest(arr, pos){
//   return arr.sort((a,b)=>a-b)[pos-1]
// }
// // 

// reverse = function(array) {
//   var newArr = [];
//   for (var i = array.length-1; i>=0; i--){
//     newArr.push(array[i]);
//   }
//   return newArr;
//   }

//   // 

//   reverse = function(array) {
//     return array.reduceRight(function(a, v){ return a.push(v), a }, []);
//   }
//   function reverse(array) {
//     return array.reduce(function(a, b) {
//       return [b].concat(a)
//     }, []);
//   }

//   function squares(x, n) {
//     var ret = [];
//     for(var i=0; i<n; i++){
//       ret.push(x);
//       x*= x;
//     }
//     return ret;
//   }

//   function squares(x, n) {
//     return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
//   }


  // const isPalindrome = (x) => {
  //   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  // }

  // const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();


  // const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //   return distanceToPump/mpg <= fuelLeft
  // };


  // const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;


  // function find_difference(a, b) {
  //   return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  // }



  // function find_difference(a, b) {
  //   return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
  // }


//   function sumStr(a,b) {
//     return sumStr.toNumber(a + b);
//   } 
//    console.log(sumStr("4","5"));


//    function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };

//   const sayHello = name => `Hello, ${name}`;

//   function sayHello (name) {
//     return 'Hello, ' +  name;
//   }

//   function sayHello(name) {
//     return `Hello, ${name}`
//   }

//   function sayHello(name) {      //Added an actual name to the function
//     return 'Hello, ' + name;     //Added '+' operator to combine strings
//   }


//   function toCsvText(array) {
//     return array.join('\n');
//  }


//  const toCsvText = array => array.join('\n');

 
//  const toCsvText = array => array.map(row => row.join(',')).join('\n');


//  function toCsvText(array) {
//   return array.map(list => list.join(',')).join('\n')
// }

// function toCsvText(arr) {
//   return arr.join("\n");
// }

// function toCsvText(array) {
//   let list = '';
//   let k;
//   let n = array.length;
  
//     for(let arr of array){
//       k = arr.length;
//       for(let a of arr){
//         list += a;
//         k--;
//         if(k > 0) list += ',';
//       }
//       n--;
//       if (n > 0) list+= '\n';
//     }
//     return list;
//   }


//   function toCsvText(array) {
//     return array.map(el => el.join(',')).join('\n');
//  }

//  function toCsvText(array) {
//   let res = '';
//   for (let i in array) {
//     res += array[i] + '\n';
//   }
//   return res.trim();
//  } 

//  var toCsvText = ( _ ) =>  _.join('\n')

//  let toCsvText = a => a.join`\n`

//  toCsvText=a=>a.join('\n')


//  const toCsvText = a => a.map(a => a.join`,`).join`\n`


//  function toCsvText(array) {
//   let res = [];
//   for (let i of array) {
//     res += i + '\n';
//   }
//   return res.trim();
//  } 

//  function toCsvText(array) {
//   let res = [];
//  let i = 0;
//  while (i < array.length) {
//    res += array[i] + '\n';
//    i++;
//  }
//  return res.trim();
// }



// function nextNumb(val) { 
//   while (val < 9876543210) {
//     val++;
//     if(val%2 && !(val%3) && val.toString().match(/^(?!.*(.).*\1)\d{1,10}$/)) {
//       return val;
//     }
//   }
//   return 'There is no possible number that fulfills those requirements';
// }


// function nextNumb(val) {
//   if (val >= 9999999999) return "There is no possible number that fulfills those requirements";
//   let num = val;
//   let arrayOfDigits = `${num}`.split("");
//   let checkUnique = [...new Set(arrayOfDigits)];
//   for (let i = val; i < val * 1.5; i++) {
//       num = num + 1;
//       arrayOfDigits = `${num}`.split("");
//       checkUnique = [...new Set(arrayOfDigits)];
//       if (Number.isInteger(num / 3) && !Number.isInteger(num / 2) && checkUnique.length === arrayOfDigits.length) {
//           break;
//       }
//   }
//   return num;
// }


// function nextNumb(n) { 
//   n+=3-n%3;
//   n+=n&1?0:3;
//   for(;n<9999999999;n+=6){
//       let s = ''+n;
//       if(new Set([...s]).size==s.length) return n;
//   }
//   return "There is no possible number that fulfills those requirements";
// }

// function barTriang(p1, p2, p3){
//   return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4),
//           +((p1[1]+p2[1]+p3[1])/3).toFixed(4)];
// }

// function barTriang(p1, p2, p3){
  
//   var x = parseFloat(parseFloat((p1[0] + p2[0] + p3[0]) / 3).toFixed(4));
//   var y = parseFloat(parseFloat((p1[1] + p2[1] + p3[1]) / 3).toFixed(4));
  
//   return [x, y];
// }


// function barTriang(p1, p2, p3){
//   let x = (p1[0] + p2[0] + p3[0]) / 3;
//   let y = (p1[1] + p2[1] + p3[1]) / 3;
  
//   return [+x.toFixed(4), +y.toFixed(4)];
// }



// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);


// var min = function(list){
//   list.sort((a, b) => (a - b));
//   return list[0];
// }

// var max = function(list){
//   list.sort((a, b) => (b - a));
//   return list[0];
// }


// var min = function(list){
//   return Math.min.apply(null,list);
// }

// var max = function(list){
//   return Math.max.apply(null,list);
// }


// const makeUpperCase = str => str.toUpperCase();



// function past(h, m, s){
//   let a = h*3600000
//   let b = m*60000
//   let c = s*1000

//   return  ( a+b+c)
// }

// console.log(past(1,1,1));



// const arr = [1,1,1,1,1,1,1,2];
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(average);

// console.log( Number(false)     );

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const array1 = [1, 2, 3, 4];


// const vol = array1.reduce(
//   (a, b) => a + b,

// );

// console.log(vol);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const foo = fruits.entries();


// console.log(foo);

// function helloWorld(){
//   var str = "Hello World!"
  
// console.log(str)
// }


// function invert(array) {
//   return array.map( (array) =>- + array  ) 
// }
//  console.log(invert( [1,2,3,4,5]));


// function saleHotdogs(n){
//   if(n < 5){
//     return n * "100"
// } else if ( n < 10){
//   return n * "95"
// }else if (n >= 10){
//   return n * "90"
// }
// }

// console.log(saleHotdogs(9));

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(result);





// const Arithmetics = {
//     add:(a, b) => {
//         return `${a} + ${b} = ${a+b}`;
//     },
//     subtract:(a, b) => {
//         return `${a} - ${b} = ${a-b}`
//     },
//     multiply:(a, b) => {
//         return `${a} * ${b} = ${a*b}`
//     },
//     division:(a, b) => {
//         if(b!=0) return `${a} / ${b} = ${a/b}`;
//         return `Cannot Divide by Zero!!!`;
//     }
 
// }
 
// console.log(Arithmetics.add(100, 100));
// console.log(Arithmetics.subtract(100, 7));
// console.log(Arithmetics.multiply(5, 5));
// console.log(Arithmetics.division(100, 5));


// function none(arr, fun){
//   return !arr.some(fun);
// }

// const none = (arr, fun) => !arr.some(fun);


// function none(arr, fun){
//   for (var i = 0; i < arr.length; i++) {
//     if (fun(arr[i]) == true) {
//       return false;
//     }
//   }
  
//   return true;
// }


// function mystery() {
  
//   var res = {sanity: 'Hello'}
//   return(
//      res 
//   )
// }
// console.log(mystery());
// function bmi(w, h) {
//   if (w / Math.pow(h, 2) <= 18.5) {
//     return  "Underweight"
//   }if (w / Math.pow(h, 2) <= 25.0){
//     return "Normal"
//   } if (w / Math.pow(h, 2) <= 30.0) {
//     return  "Overweight"
//   }  if (w / Math.pow(h, 2) > 30) {
//     return  "Obese"
//   }
// }

// console.log(bmi(80, 1.80));

// kata

// function first(arr, n=1) {
//   return arr.slice(0,n);
// }

  
// FIRST 
// function howManyLightsabersDoYouOwn(name) {
//   if ( name == 'Zach'){
//     return 18
//   }else{
//   return 0
//   }
// } 

// console.log(howManyLightsabersDoYouOwn('Zach'));


// SECOND 
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);


// ---------
// function findMultiples(int,limit){
//   let result = []
  
//   for (let i = int; i<=limit ; i+=int)
//     result.push(i)
    
//   return result
// }

// var Ball = function(ballType) {
//   this.ballType = ballType || 'regular';
// };

// --------- 

//THIRD 

function century(year) {
  if ( year.slice(1,2) < 5 ){
    return Math.floor(year)
  } else{

    return year[0] + year[1] ;
  }
}

console.log(century(1500));


function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}