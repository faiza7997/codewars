// function expressionMatter(a, b, c) {
//     return // highest achievable result
//   }


// My solution

function expressionMatter(a, b, c) {
    let output = [];
    output.push(a *(b + c));
    output.push(a * b * c);
    output.push(a + b * c);
    output.push((a + b) * c);
    output.push(a+b+c);
      return Math.max(...output);
  }