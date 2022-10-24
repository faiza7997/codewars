


// first

function expressionMatter(a, b, c) {
    let output = [];
    output.push(a *(b + c));
    output.push(a * b * c);
    output.push(a + b * c);
    output.push((a + b) * c);
    output.push(a+b+c);
      return Math.max(...output);
  }



//   second



var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }


// third
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
}


// fouth
function isLeapYear(duration, year) {
  return duration * year % 1 === 0;
}

// fifth
const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + difference % 3


// sixth

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

// seventh

var uniqueInOrder = function(iterable) {
  var arr = [];
  for (var i=0;i<iterable.length;i++) {

  // check if there is back to back letter
  if (iterable[i] !== iterable[i+1]) {

      // if not, push the current value to arr
    arr.push(iterable[i]);
  }
}
return arr;
}

// eight

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

// nine 

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// ten 

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);

// eleven 

function giveMeFive(obj){
  var five=[];
  for (var key in obj) {
    if (key.length==5) five.push(key);
    if (obj[key].length==5) five.push(obj[key]);
  }
  return five;
}

// twelve

function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}

// thirteen

function sortDict(dict){
  return Object.keys(dict)
    .map(function(v){ return [+v || v, dict[v]] })
    .sort(function(a, b){ return a[1] < b[1] });
}

// fourteen

function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}


//  fiveteen 


function sortDict(dict){
  return Object.keys(dict)
    .map(function(v){ return [+v || v, dict[v]] })
    .sort(function(a, b){ return a[1] < b[1] });
}


// sixteen 


reverse = function(array) {
  var newArr = [];
  for (var i = array.length-1; i>=0; i--){
    newArr.push(array[i]);
  }
  return newArr;
  }

  // Seventeen

  function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name
  }