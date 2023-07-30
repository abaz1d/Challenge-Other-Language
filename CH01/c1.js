//CH1
//==============================================================
// function sum(arr) {
//   var s = 0;
//   for (var i = 0; i < arr.length; i++) {
//     s = s + arr[i];
//   }
//   console.log(s);
// }

// sum([1, 2, 7]);
// sum([1, 4]);
// sum([11]);
// sum([10, 3, 6, 7, 9]);
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  console.log(total);
}

sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);
