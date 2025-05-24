const marks = [89, 93, 83, 76, 81, 72, 94, 79,86]
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0)
const average = parseFloat((totalMarks / 9).toFixed(2));



// --------------Number() vs parseFloat()-------------------------

const num1 = Number('21');
const num2 = 32;
console.log(num1 + num2)