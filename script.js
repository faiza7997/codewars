


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